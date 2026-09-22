import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = readFileSync(new URL("../main.js", import.meta.url), "utf8");
function setup(stored = {}) {
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
  window.eval(script);
  const $ = (selector) => window.document.querySelector(selector);
  const $$ = (selector) => [...window.document.querySelectorAll(selector)];
  return { window, $, $$, close: () => window.close() };
}

test("initial questions, load more, topic filters and search work", () => {
  const s = setup();
  assert.equal(s.$$(".question-card").length, 6);
  s.$("#load-more").click();
  assert.equal(s.$$(".question-card").length, 12);
  s.$('[data-filter="positive"]').click();
  assert.equal(s.$$(".question-card").length, 4);
  assert.ok(
    s
      .$$(".question-card .badge")
      .every((el) => el.classList.contains("positive")),
  );
  s.$("#search").value = "connected";
  s.$("#search").dispatchEvent(new s.window.Event("input"));
  assert.equal(s.$$(".question-card").length, 1);
  s.$("#search").value = "not a matching question";
  s.$("#search").dispatchEvent(new s.window.Event("input"));
  assert.equal(s.$$(".question-card").length, 0);
  assert.equal(s.$("#empty-state").hidden, false);
  s.close();
});

test("bookmarks and reflections persist, safely render, and can be deleted", () => {
  const s = setup();
  s.$('[data-save="1"]').click();
  assert.equal(s.$("#reflection-count").textContent, "1");
  assert.deepEqual(
    JSON.parse(s.window.localStorage.getItem("perspective-saved")),
    [1],
  );
  s.$('[data-question="2"]').click();
  const reflection = "I will notice comparison. <img src=x onerror=alert(1)>";
  s.$("#reflection-input").value = reflection;
  s.$("#save-reflection").click();
  assert.equal(s.$("#modal").open, false);
  assert.equal(s.$("#reflection-count").textContent, "2");
  s.$('[data-view="reflections"]').click();
  assert.equal(s.$$(".question-card").length, 2);
  assert.equal(s.$(".reflected-text").textContent, reflection);
  assert.equal(s.$(".reflected-text img"), null);
  const stored = JSON.parse(
    s.window.localStorage.getItem("perspective-reflections"),
  );
  const restored = setup({ "perspective-reflections": stored });
  restored.$('[data-view="reflections"]').click();
  assert.equal(restored.$(".reflected-text").textContent, reflection);
  restored.close();
  s.$('[data-question="2"]').click();
  s.$("#delete-reflection").click();
  assert.equal(s.$$(".question-card").length, 1);
  s.$('[data-save="1"]').click();
  assert.equal(s.$("#empty-state").hidden, false);
  s.close();
});

test("all check-in paths complete and link to balance questions", () => {
  for (const answer of [0, 1, 2]) {
    const s = setup();
    s.$("[data-check]").click();
    s.$(`[data-answer="${answer}"]`).click();
    s.$("#quiz-back").click();
    assert.ok(s.$(`[data-answer="${answer}"]`).classList.contains("selected"));
    for (let i = 0; i < 4; i++) s.$(`[data-answer="${answer}"]`).click();
    assert.equal(s.$$(".result-list li").length, 4);
    assert.match(
      s.$("#modal-content").textContent,
      /not a mental health assessment/,
    );
    s.$("#balance-questions").click();
    assert.equal(s.$("#modal").open, false);
    assert.equal(s.$$(".question-card").length, 4);
    assert.ok(s.$('[data-filter="balance"]').classList.contains("active"));
    s.close();
  }
});

test("resources and how-it-works are usable", () => {
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
  assert.equal(s.$("#modal").open, true);
  s.$("#start-exploring").click();
  assert.equal(s.$("#modal").open, false);
  assert.equal(s.$$(".question-card").length, 6);
  s.close();
});

test("empty reflections cannot be saved and invalid stored data does not break rendering", () => {
  const s = setup({
    "perspective-saved": "invalid",
    "perspective-reflections": [],
  });
  s.$('[data-question="1"]').click();
  s.$("#save-reflection").click();
  assert.equal(s.$("#modal").open, true);
  assert.equal(s.$("#reflection-count").textContent, "0");
  s.close();
});
