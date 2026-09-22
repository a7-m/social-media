import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = readFileSync(new URL("../main.js", import.meta.url), "utf8");
const SAVED_KEY = "perspective-knowledge-v1-saved";
const ANSWERS_KEY = "perspective-knowledge-v1-answers";
// Independent expected answers, in question order.
const correct = [
  [1],
  [0, 1, 3],
  [1],
  [0, 2, 3],
  [1],
  [2],
  [0],
  [1],
  [0, 1, 3],
  [3],
  [0, 2, 3],
  [1],
];
function setup(stored = {}, { blockedStorage = false } = {}) {
  const dom = new JSDOM(html, {
    url: "https://perspective.test",
    runScripts: "outside-only",
  });
  const { window } = dom;
  window.HTMLElement.prototype.scrollIntoView = function () {};
  window.HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  window.HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  for (const [key, value] of Object.entries(stored))
    window.localStorage.setItem(key, JSON.stringify(value));
  if (blockedStorage) {
    window.Storage.prototype.getItem = () => {
      throw new Error("Storage blocked");
    };
    window.Storage.prototype.setItem = () => {
      throw new Error("Storage blocked");
    };
  }
  window.eval(script);
  const $ = (selector) => window.document.querySelector(selector);
  const $$ = (selector) => [...window.document.querySelectorAll(selector)];
  const choose = (values) =>
    values.forEach((i) => $(`input[name="answer"][value="${i}"]`).click());
  const submit = () => $("#check-answer").click();
  return { window, $, $$, choose, submit, close: () => window.close() };
}

test("12 general questions evenly cover all three formats and topics, without personal prompts", () => {
  const s = setup();
  assert.equal(s.$$(".question-card").length, 6);
  s.$("#load-more").click();
  assert.equal(s.$$(".question-card").length, 12);
  for (const format of [
    "Multiple choice",
    "Select all that apply",
    "True / false",
  ]) {
    assert.equal(
      s.$$(".card-bottom > span").filter((el) => el.textContent === format)
        .length,
      4,
    );
  }
  for (const topic of ["positive", "challenge", "balance"]) {
    s.$(`[data-filter="${topic}"]`).click();
    assert.equal(s.$$(".question-card").length, 4);
  }
  assert.equal(s.$("textarea"), null);
  assert.doesNotMatch(
    s.$("body").textContent,
    /My reflections|check-in|digital self|relationship with your feed/,
  );
  assert.ok(
    s
      .$$(".question-card h3")
      .every((el) => !/\byou(r)?\b/i.test(el.textContent)),
  );
  s.$('[data-filter="positive"]').click();
  s.$("#search").value = "learning";
  s.$("#search").dispatchEvent(new s.window.Event("input"));
  assert.equal(s.$$(".question-card").length, 1);
  s.$("#search").value = "no matching topic";
  s.$("#search").dispatchEvent(new s.window.Event("input"));
  assert.equal(s.$("#empty-state").hidden, false);
  s.close();
});

test("multiple-choice questions enforce one selection, validate empty submission, and explain answers", () => {
  const s = setup();
  s.$('[data-question="1"]').click();
  assert.equal(s.$$("input[type=radio]").length, 4);
  assert.equal(s.$("#answer-feedback"), null);
  s.submit();
  assert.match(s.$("#answer-error").textContent, /Choose an answer/);
  assert.equal(s.$("#answer-feedback"), null);
  s.choose([0, 1]);
  assert.equal(s.$$("input:checked").length, 1);
  assert.equal(s.$("#answer-error").textContent, "");
  s.submit();
  assert.equal(s.$("#feedback-heading").textContent, "Correct!");
  assert.match(s.$("#answer-feedback").textContent, /geographic boundaries/);
  assert.equal(s.$("fieldset").disabled, true);
  assert.equal(s.window.document.activeElement.id, "answer-feedback");
  s.$("#retry-question").click();
  assert.equal(s.$$("input:checked").length, 0);
  s.choose([0]);
  s.submit();
  assert.match(s.$("#feedback-heading").textContent, /Not quite/);
  assert.match(s.$(".correct-option").textContent, /Connecting people/);
  s.close();
});

test("select-all questions require every correct option and no extras", () => {
  for (const [selection, expected] of [
    [[0], false],
    [[0, 1], false],
    [[0, 1, 2, 3], false],
    [[0, 1, 3], true],
  ]) {
    const s = setup();
    s.$('[data-question="2"]').click();
    assert.equal(s.$$("input[type=checkbox]").length, 4);
    s.submit();
    assert.match(s.$("#answer-error").textContent, /Select at least one/);
    s.choose(selection);
    s.submit();
    assert.equal(
      s.$("#answer-feedback").classList.contains("is-correct"),
      expected,
    );
    assert.equal(s.$$(".correct-option").length, 3);
    s.close();
  }
});

test("true/false questions support both answers and correct grading", () => {
  for (const choice of [0, 1]) {
    const s = setup();
    s.$('[data-question="3"]').click();
    assert.equal(s.$$("input[type=radio]").length, 2);
    assert.deepEqual(
      s.$$(".answer-option > span").map((el) => el.textContent),
      ["True", "False"],
    );
    s.choose([choice]);
    s.submit();
    assert.equal(
      s.$("#answer-feedback").classList.contains("is-correct"),
      choice === 1,
    );
    s.close();
  }
});

test("bookmarks and checked answers persist and can be revisited", () => {
  const s = setup();
  s.$('[data-save="1"]').click();
  assert.equal(s.$("#saved-count").textContent, "1");
  s.$('[data-question="1"]').click();
  s.choose([1]);
  s.submit();
  assert.equal(
    s.$("#question-total").textContent,
    "1 of 12 questions answered",
  );
  const stored = {
    [SAVED_KEY]: JSON.parse(s.window.localStorage.getItem(SAVED_KEY)),
    [ANSWERS_KEY]: JSON.parse(s.window.localStorage.getItem(ANSWERS_KEY)),
  };
  const restored = setup(stored);
  restored.$('[data-view="saved"]').click();
  assert.equal(restored.$$(".question-card").length, 1);
  assert.match(restored.$('[data-question="1"]').textContent, /Review answer/);
  restored.$('[data-question="1"]').click();
  assert.equal(restored.$("#feedback-heading").textContent, "Correct!");
  restored.$("#close-modal").click();
  restored.$('[data-save="1"]').click();
  assert.equal(restored.$("#empty-state").hidden, false);
  assert.deepEqual(
    JSON.parse(restored.window.localStorage.getItem(SAVED_KEY)),
    [],
  );
  assert.equal(restored.$("#saved-count").textContent, "0");
  restored.close();
  s.close();
});

test("quiz preserves drafts and checked answers through back navigation", () => {
  const s = setup();
  s.$("[data-quiz]").click();
  assert.equal(s.$("#quiz-next"), null);
  s.choose([1]);
  s.submit();
  s.$("#quiz-next").click();
  s.choose([0, 3]);
  s.$("#quiz-back").click();
  assert.equal(s.$("#feedback-heading").textContent, "Correct!");
  assert.equal(s.$("fieldset").disabled, true);
  s.$("#quiz-next").click();
  assert.deepEqual(
    s.$$("input:checked").map((el) => el.value),
    ["0", "3"],
  );
  assert.equal(s.$("#answer-feedback"), null);
  s.choose([1]);
  s.submit();
  assert.equal(s.$("#feedback-heading").textContent, "Correct!");
  s.close();
});

test("full quiz scores all question types accurately and retakes start fresh", () => {
  for (const wrongCount of [0, 5, 12]) {
    const s = setup();
    s.$("[data-quiz]").click();
    correct.forEach((selection, index) => {
      const wrong =
        selection.length > 1
          ? [selection[0]]
          : [(selection[0] + 1) % s.$$("input[name=answer]").length];
      s.choose(index < wrongCount ? wrong : selection);
      s.submit();
      s.$("#quiz-next").click();
    });
    assert.equal(
      s.$(".quiz-score strong").textContent,
      `${12 - wrongCount} / 12`,
    );
    assert.equal(s.$$(".quiz-review details").length, 12);
    assert.ok(
      s
        .$$(".quiz-review details")
        .every((el) => el.querySelectorAll("p").length === 3),
    );
    s.$("#quiz-restart").click();
    assert.equal(s.$$("input:checked").length, 0);
    assert.equal(s.$("#answer-feedback"), null);
    assert.equal(s.$("#quiz-back"), null);
    s.close();
  }
});

test("resources, how-it-works, and dialog close remain usable", () => {
  const s = setup();
  s.$('[data-view="resources"]').click();
  assert.equal(s.$$(".resource-card a").length, 3);
  assert.ok(
    s
      .$$(".resource-card a")
      .every(
        (a) => a.href.startsWith("https://") && a.rel.includes("noopener"),
      ),
  );
  s.$("#how-button").click();
  assert.match(s.$("#modal-content").textContent, /select-all-that-apply/);
  assert.equal(s.$("#modal").getAttribute("aria-labelledby"), "modal-title");
  s.$("#start-exploring").click();
  assert.equal(s.$("#modal").open, false);
  assert.equal(s.$$(".question-card").length, 6);
  s.close();
});

test("invalid stored selections and old personal reflections are not used", () => {
  const s = setup({
    [SAVED_KEY]: [1, 1, 999, "2"],
    [ANSWERS_KEY]: {
      1: [0, 1],
      2: [0, 0],
      3: [99],
      4: [],
      5: "unsafe",
      6: [2],
    },
    "perspective-reflections": { 1: "Private old reflection <img src=x>" },
    "perspective-saved": [2],
  });
  assert.equal(s.$("#saved-count").textContent, "1");
  assert.equal(
    s.$("#question-total").textContent,
    "1 of 12 questions answered",
  );
  s.$('[data-question="1"]').click();
  assert.equal(s.$("#answer-feedback"), null);
  assert.doesNotMatch(s.$("body").textContent, /Private old reflection/);
  s.close();
});

test("blocked storage still allows answering and saving for the current visit", () => {
  const s = setup({}, { blockedStorage: true });
  s.$('[data-save="1"]').click();
  assert.match(s.$("#toast").textContent, /this visit only/);
  s.$('[data-question="1"]').click();
  s.choose([1]);
  s.submit();
  assert.equal(s.$("#feedback-heading").textContent, "Correct!");
  assert.match(s.$("#toast").textContent, /this visit only/);
  s.$("#close-modal").click();
  s.$('[data-view="saved"]').click();
  assert.equal(s.$$(".question-card").length, 1);
  s.close();
});
