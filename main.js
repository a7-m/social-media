const paths = {
  "arrow-right": "M4 12h16m-6-6 6 6-6 6",
  "arrow-up-right": "M6 18 18 6M6 6h12v12",
  "arrow-down": "M12 4v16m-6-6 6 6 6-6",
  sun: "M12 3v1m0 16v1M3 12h1m16 0h1M5.6 5.6l.7.7m11.4 11.4.7.7m0-12.8-.7.7M6.3 17.7l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  cloud: "M6 18a4 4 0 0 1-1-7.9A6 6 0 0 1 17 9a4.5 4.5 0 1 1 1 9H6",
  balance: "M12 3v17m-5 0h10M4 7h16M6 7l-4 8h8L6 7m12 0-4 8h8l-4-8",
  search: "m20 20-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0",
  bookmark: "M6 3h12v18l-6-4-6 4V3",
  clock: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  sparkles:
    "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3m7 0v4m-2-2h4",
  leaf: "M20 3C8 2 2 7 5 15s17 6 15-12ZM5 20 15 10",
  play: "m9 5 11 7-11 7V5",
  x: "m6 6 12 12M6 18 18 6",
  book: "M12 5v16M3 3h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v16h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3V3",
  check: "m5 12 4 4L19 6",
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.sparkles}"/></svg>`;
const hydrate = () =>
  document
    .querySelectorAll("[data-icon]")
    .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
const categories = {
  positive: { label: "The good side", icon: "sun" },
  challenge: { label: "The bad side", icon: "cloud" },
  balance: { label: "Healthy habits", icon: "balance" },
};
const formats = {
  multiple: { label: "Multiple choice", instruction: "Choose one answer." },
  select: {
    label: "Select all that apply",
    instruction:
      "Choose all the right answers. Do not choose any wrong answers.",
  },
  boolean: { label: "True / false", instruction: "Choose true or false." },
};
const questions = [
  {
    id: 1,
    type: "positive",
    format: "multiple",
    title: "What is one good thing about social media?",
    description: "Learn how social media can bring people together.",
    options: [
      "Making every post true",
      "Connecting people who like the same things, even far away",
      "Replacing all face-to-face friendships",
      "Stopping people from ever disagreeing",
    ],
    correct: [1],
    explanation:
      "Social media can connect people who live far apart. It helps them find others who like the same things. But not every post is true. Online contact does not replace all face-to-face friendships.",
  },
  {
    id: 2,
    type: "challenge",
    format: "select",
    title: "What problems can social media cause?",
    description: "Learn about some of the risks of social media.",
    options: [
      "Bullying people online",
      "Spreading false information",
      "Joining groups that help people learn",
      "Sharing private details with people who should not see them",
    ],
    correct: [0, 1, 3],
    explanation:
      "Online bullying, false information, and sharing private details can cause harm. Groups that help people learn are a good use of social media. Not everyone has the same experience online.",
  },
  {
    id: 3,
    type: "balance",
    format: "boolean",
    title: "The same daily time limit for social media works for everyone.",
    description: "Think about whether one rule can suit all people.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "People have different ages, needs, and daily routines. One time limit does not work for everyone. Social media should not get in the way of sleep, work, or friendships.",
  },
  {
    id: 4,
    type: "positive",
    format: "select",
    title: "How can social media help people learn?",
    description: "Find ways that social media can support learning.",
    options: [
      "Sharing videos that teach new skills",
      "Making a post true just because it is popular",
      "Connecting people with others who can teach them",
      "Sharing different ideas and views",
    ],
    correct: [0, 2, 3],
    explanation:
      "Videos, learning groups, and new ideas can help people learn. But a popular post is not always true. It is important to check where the information comes from.",
  },
  {
    id: 5,
    type: "challenge",
    format: "boolean",
    title: "A post with thousands of likes must be true.",
    description: "Think about what likes do—and do not—mean.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "Likes do not prove that a post is true. False posts can get lots of likes too. Check who posted it, when it was posted, and what trusted sources say.",
  },
  {
    id: 6,
    type: "balance",
    format: "multiple",
    title: "What is the best way to check if a post is true?",
    description: "Learn what to check before sharing a post.",
    options: [
      "Trust it because a friend shared it",
      "Look only at how many comments it has",
      "Find where it came from and check other trusted sources",
      "Share it quickly while it is popular",
    ],
    correct: [2],
    explanation:
      "Find where the information first came from. Then check if other trusted sources agree, such as official health websites. A friend sharing a post does not prove it is true.",
  },
  {
    id: 7,
    type: "positive",
    format: "boolean",
    title: "Social media can help small shops reach people in other towns.",
    description: "Learn how social media can help small businesses.",
    options: ["True", "False"],
    correct: [0],
    explanation:
      "Small shops can show their products to people in many places. This can help them find new customers. But posting online does not mean people will buy something.",
  },
  {
    id: 8,
    type: "challenge",
    format: "multiple",
    title: "Why can social media make other people’s lives look perfect?",
    description: "A post may not show the whole story.",
    options: [
      "Posts always show every part of a person’s life",
      "People may share only their best moments",
      "Every photo online is fake",
      "Everyone has the same life",
    ],
    correct: [1],
    explanation:
      "People often share happy moments and leave out hard days. A few posts do not show a whole life. This does not mean that every post is fake.",
  },
  {
    id: 9,
    type: "balance",
    format: "select",
    title: "Which habits can help people use social media in a healthy way?",
    description: "Find ways to make time for life away from a screen.",
    options: [
      "Turning off alerts that are not needed",
      "Putting the phone away during sleep or important tasks",
      "Keeping every alert on to avoid missing anything",
      "Setting times to check apps",
    ],
    correct: [0, 1, 3],
    explanation:
      "Fewer alerts and set times for apps can help people stay focused. Putting phones away can make more time for sleep and other tasks. Keeping every alert on can make it harder to focus.",
  },
  {
    id: 10,
    type: "positive",
    format: "multiple",
    title: "Which is a helpful use of social media?",
    description: "Learn how a post can help a local group.",
    options: [
      "Posting someone’s address without asking",
      "Sharing news about an emergency without checking it",
      "Telling people to bully someone who disagrees",
      "Sharing checked details about a local volunteer event",
    ],
    correct: [3],
    explanation:
      "Correct event details can help people join in and help others. Sharing private details, false news, or hurtful posts can cause harm.",
  },
  {
    id: 11,
    type: "challenge",
    format: "select",
    title: "Which actions can put private information at risk?",
    description: "Learn how private details can reach the wrong people.",
    options: [
      "Posting a home address for everyone to see",
      "Checking who can see a post",
      "Sharing a person’s exact location for everyone to see",
      "Posting someone’s private details without asking",
    ],
    correct: [0, 2, 3],
    explanation:
      "Public addresses, exact locations, and private details can be misused. Checking who can see a post helps protect privacy. But people can still take screenshots or share the post.",
  },
  {
    id: 12,
    type: "balance",
    format: "boolean",
    title: "Privacy settings stop anyone from copying a post.",
    description: "Learn what privacy settings can and cannot do.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "Privacy settings help control who can see a post. But someone who sees it can still copy it or take a screenshot. Private posts can still be shared with others.",
  },
];

// Versioned keys keep new quiz data separate from the former personal reflections.
const SAVED_KEY = "perspective-knowledge-v1-saved";
const ANSWERS_KEY = "perspective-knowledge-v1-answers";
const readStore = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const validSelection = (q, selection) =>
  Array.isArray(selection) &&
  selection.length > 0 &&
  new Set(selection).size === selection.length &&
  selection.every(
    (i) => Number.isInteger(i) && i >= 0 && i < q.options.length,
  ) &&
  (q.format === "select" || selection.length === 1);
const storedSaved = readStore(SAVED_KEY, []);
let saved = Array.isArray(storedSaved)
  ? [...new Set(storedSaved.filter((id) => questions.some((q) => q.id === id)))]
  : [];
const storedAnswers = readStore(ANSWERS_KEY, {});
let answers = {};
if (
  storedAnswers &&
  typeof storedAnswers === "object" &&
  !Array.isArray(storedAnswers)
) {
  for (const q of questions) {
    if (validSelection(q, storedAnswers[q.id]))
      answers[q.id] = storedAnswers[q.id];
  }
}
let view = "explore",
  filter = "all",
  query = "",
  limit = 6;
const grid = document.querySelector("#question-grid");
const modal = document.querySelector("#modal");
const content = document.querySelector("#modal-content");
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const isCorrect = (q, selection) =>
  selection.length === q.correct.length &&
  q.correct.every((i) => selection.includes(i));
function persist() {
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
    return true;
  } catch {
    return false;
  }
}
let toastTimeout;
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove("visible"), 3200);
}
function render() {
  document.querySelector("#saved-count").textContent = saved.length;
  document
    .querySelector(".question-toolbar")
    .classList.toggle("view-hidden", view === "resources");
  document
    .querySelector(".load-row")
    .classList.toggle("view-hidden", view === "resources");
  document
    .querySelector("#question-total")
    .classList.toggle("view-hidden", view !== "explore");
  document.querySelector("#question-total").textContent =
    `${Object.keys(answers).length} of ${questions.length} questions answered`;
  if (view === "resources") {
    renderResources();
    return;
  }
  const list = questions.filter(
    (q) =>
      (view !== "saved" || saved.includes(q.id)) &&
      (filter === "all" || q.type === filter) &&
      `${q.title} ${q.description} ${formats[q.format].label}`
        .toLowerCase()
        .includes(query),
  );
  grid.innerHTML = list
    .slice(0, limit)
    .map((q) => {
      const cat = categories[q.type],
        answered = Boolean(answers[q.id]);
      return `<article class="question-card">
      <div class="card-top"><span class="badge ${q.type}">${icon(cat.icon)}${cat.label}</span>
        <button class="icon-button ${saved.includes(q.id) ? "saved" : ""}" data-save="${q.id}" aria-label="${saved.includes(q.id) ? "Unsave" : "Save"} question: ${escape(q.title)}" aria-pressed="${saved.includes(q.id)}">${icon("bookmark")}</button></div>
      <h3>${q.title}</h3><p>${q.description}</p>
      <div class="card-bottom"><span>${icon(answered ? "check" : "book")}${formats[q.format].label}</span>
        <button data-question="${q.id}">${answered ? "Review answer" : "Answer question"} ${icon("arrow-right")}</button></div>
    </article>`;
    })
    .join("");
  document.querySelector("#empty-state").hidden = list.length > 0;
  document.querySelector("#empty-title").textContent =
    view === "saved" && !query && filter === "all"
      ? "No saved questions yet."
      : "No questions found.";
  document.querySelector("#empty-copy").textContent =
    view === "saved" && !query && filter === "all"
      ? "Use the bookmark icon to save a question for later."
      : "Try a different search or topic.";
  document.querySelector("#load-more").hidden = list.length <= limit;
  document.querySelector("#showing-count").textContent = list.length
    ? `Showing ${Math.min(limit, list.length)} of ${list.length} questions`
    : "";
}
function setView(next) {
  view = next;
  filter = "all";
  query = "";
  limit = 6;
  document.querySelector("#search").value = "";
  document.querySelectorAll(".tab").forEach((el) => {
    el.classList.toggle("active", el.dataset.filter === "all");
    el.setAttribute("aria-pressed", el.dataset.filter === "all");
  });
  document
    .querySelectorAll("[data-view]")
    .forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  document.querySelector("#section-title").textContent = {
    explore: "Learn about social media.",
    saved: "Saved questions.",
    resources: "Learn more.",
  }[view];
  document.querySelector("#section-description").textContent = {
    explore:
      "Try multiple-choice, select-all-that-apply, and true/false questions.",
    saved: "Find saved questions here. They stay in this browser only.",
    resources:
      "Find tips for healthy habits, online safety, and checking facts.",
  }[view];
  render();
  document.querySelector("#questions").scrollIntoView({ behavior: "smooth" });
}
function openModal(html) {
  content.innerHTML = html;
  const heading = content.querySelector("h2");
  if (heading) {
    heading.id = "modal-title";
    heading.tabIndex = -1;
  }
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
  heading?.focus({ preventScroll: true });
}
function closeModal() {
  modal.close();
  document.body.style.overflow = "";
}
document.querySelector("#close-modal").onclick = closeModal;
modal.addEventListener("close", () => (document.body.style.overflow = ""));
modal.addEventListener("click", (e) => {
  if (e.target !== modal) return;
  const r = modal.getBoundingClientRect();
  if (
    e.clientX < r.left ||
    e.clientX > r.right ||
    e.clientY < r.top ||
    e.clientY > r.bottom
  )
    closeModal();
});

// The same answer form serves individual practice and the full knowledge quiz.
let quizAttempts = [],
  quizStep = 0;
function showQuestion(q, attempt, inQuiz = false) {
  const cat = categories[q.type],
    format = formats[q.format];
  const result = attempt.submitted ? isCorrect(q, attempt.selected) : null;
  openModal(`
    ${inQuiz ? `<div class="eyebrow">QUIZ · ${quizStep + 1} OF ${questions.length}</div><div class="quiz-progress" aria-hidden="true">${questions.map((_, i) => `<i class="${i <= quizStep ? "done" : ""}"></i>`).join("")}</div>` : ""}
    <span class="badge ${q.type}">${icon(cat.icon)}${cat.label}</span>
    <h2>${q.title}</h2><p class="question-format">${format.label}</p>
    <form id="answer-form" novalidate>
      <fieldset class="answer-options" aria-describedby="answer-error" ${attempt.submitted ? "disabled" : ""}>
        <legend>${format.instruction}</legend>
        ${q.options
          .map(
            (
              option,
              i,
            ) => `<label class="answer-option ${attempt.submitted && q.correct.includes(i) ? "correct-option" : ""} ${attempt.submitted && attempt.selected.includes(i) && !q.correct.includes(i) ? "incorrect-option" : ""}">
          <input type="${q.format === "select" ? "checkbox" : "radio"}" name="answer" value="${i}" ${attempt.selected.includes(i) ? "checked" : ""}>
          <span>${escape(option)}${attempt.submitted ? `<small>${q.correct.includes(i) ? "Correct answer" : ""}${q.correct.includes(i) && attempt.selected.includes(i) ? " · " : ""}${attempt.selected.includes(i) ? "Selected" : ""}</small>` : ""}</span>
        </label>`,
          )
          .join("")}
      </fieldset>
      <p id="answer-error" class="answer-error" role="alert"></p>
      ${
        attempt.submitted
          ? `<section class="answer-feedback ${result ? "is-correct" : "is-incorrect"}" id="answer-feedback" tabindex="-1" aria-labelledby="feedback-heading">
        <h3 id="feedback-heading">${result ? "Correct!" : "Not quite. Here is the answer."}</h3>
        <p><strong>${q.correct.length > 1 ? "Correct answers" : "Correct answer"}:</strong> ${q.correct.map((i) => escape(q.options[i])).join("; ")}</p>
        <p>${q.explanation}</p>
      </section>`
          : ""
      }
      <div class="modal-actions">
        ${inQuiz && quizStep > 0 ? '<button class="text-button" type="button" id="quiz-back">← Previous question</button>' : '<span class="privacy-note">Questions about facts, not personal life.</span>'}
        ${!attempt.submitted ? '<button class="button primary" type="submit" id="check-answer">Check answer</button>' : inQuiz ? `<button class="button primary" type="button" id="quiz-next">${quizStep === questions.length - 1 ? "See results" : "Next question"} ${icon("arrow-right")}</button>` : '<button class="button primary" type="button" id="retry-question">Try again</button>'}
      </div>
    </form>
  `);
  const form = content.querySelector("#answer-form");
  form.addEventListener("change", () => {
    if (attempt.submitted) return;
    attempt.selected = [...form.querySelectorAll("input:checked")].map(
      (input) => Number(input.value),
    );
    content.querySelector("#answer-error").textContent = "";
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (attempt.submitted) return;
    attempt.selected = [...form.querySelectorAll("input:checked")].map(
      (input) => Number(input.value),
    );
    if (!validSelection(q, attempt.selected)) {
      content.querySelector("#answer-error").textContent =
        q.format === "select"
          ? "Select at least one answer before checking."
          : "Choose an answer before checking.";
      form.querySelector("input").focus();
      return;
    }
    attempt.submitted = true;
    answers[q.id] = [...attempt.selected];
    const stored = persist();
    render();
    showQuestion(q, attempt, inQuiz);
    content.querySelector("#answer-feedback").focus();
    if (!stored)
      toast(
        "Answers saved for this visit only. This browser cannot save them for later.",
      );
  });
  const back = content.querySelector("#quiz-back");
  if (back)
    back.onclick = () => {
      quizStep--;
      showQuiz();
    };
  const next = content.querySelector("#quiz-next");
  if (next)
    next.onclick = () => {
      if (quizStep === questions.length - 1) showResult();
      else {
        quizStep++;
        showQuiz();
      }
    };
  const retry = content.querySelector("#retry-question");
  if (retry)
    retry.onclick = () => showQuestion(q, { selected: [], submitted: false });
}
function openQuestion(id) {
  const q = questions.find((q) => q.id === id);
  showQuestion(q, {
    selected: [...(answers[id] || [])],
    submitted: Boolean(answers[id]),
  });
}
function startQuiz() {
  quizAttempts = questions.map(() => ({ selected: [], submitted: false }));
  quizStep = 0;
  showQuiz();
}
function showQuiz() {
  showQuestion(questions[quizStep], quizAttempts[quizStep], true);
}
function showResult() {
  const score = questions.filter((q, i) =>
    isCorrect(q, quizAttempts[i].selected),
  ).length;
  openModal(`<div class="eyebrow">QUIZ COMPLETE</div><h2>${score === questions.length ? "All answers correct. Great job!" : "Good effort. Keep learning!"}</h2>
    <div class="quiz-score"><strong>${score} / ${questions.length}</strong><span>questions correct</span></div>
    <p>Each correct answer earns one point. For select-all questions, choose every right answer and no wrong ones. Open a question below to learn why an answer is right.</p>
    <div class="quiz-review">${questions
      .map(
        (
          q,
          i,
        ) => `<details><summary>${icon(isCorrect(q, quizAttempts[i].selected) ? "check" : "x")}<span>${i + 1}. ${q.title}<small>${isCorrect(q, quizAttempts[i].selected) ? "Correct" : "Wrong"} · ${formats[q.format].label}</small></span></summary>
      <p><strong>Selected:</strong> ${quizAttempts[i].selected.map((n) => escape(q.options[n])).join("; ")}</p>
      <p><strong>Correct:</strong> ${q.correct.map((n) => escape(q.options[n])).join("; ")}</p><p>${q.explanation}</p></details>`,
      )
      .join("")}</div>
    <div class="modal-actions"><button class="text-button" id="quiz-restart">Try the quiz again</button><button class="button primary" id="finish-quiz">View questions ${icon("arrow-right")}</button></div>`);
  content.querySelector("#quiz-restart").onclick = startQuiz;
  content.querySelector("#finish-quiz").onclick = () => {
    closeModal();
    setView("explore");
  };
}

grid.addEventListener("click", (e) => {
  const save = e.target.closest("[data-save]"),
    question = e.target.closest("[data-question]");
  if (save) {
    const id = Number(save.dataset.save);
    saved = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    const stored = persist();
    render();
    toast(
      stored
        ? saved.includes(id)
          ? "Question saved for later."
          : "Bookmark removed."
        : "Changes saved for this visit only. This browser cannot save them for later.",
    );
  }
  if (question) openQuestion(Number(question.dataset.question));
});
document
  .querySelectorAll("[data-view]")
  .forEach((el) => (el.onclick = () => setView(el.dataset.view)));
document.querySelectorAll(".tab").forEach((el) => {
  el.setAttribute("aria-pressed", el.classList.contains("active"));
  el.onclick = () => {
    filter = el.dataset.filter;
    limit = 6;
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t === el);
      t.setAttribute("aria-pressed", t === el);
    });
    render();
  };
});
document.querySelector("#search").oninput = (e) => {
  query = e.target.value.toLowerCase().trim();
  limit = 6;
  render();
};
document.querySelector("#load-more").onclick = () => {
  limit += 6;
  render();
};
document.querySelector("#explore-button").onclick = () => setView("explore");
document.addEventListener("keydown", (e) => {
  if (
    e.key === "/" &&
    !modal.open &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    e.preventDefault();
    if (view === "resources") setView("explore");
    document.querySelector("#search").focus();
  }
});
document.querySelector("#how-button").onclick = () =>
  openModal(`<div class="eyebrow">HOW TO PLAY</div><h2>Choose an answer. Learn something new.</h2><p>Learn about the good and bad sides of social media. These questions ask about facts, not personal life.</p>
  <ol class="steps"><li><h3>Choose a question</h3><p>Pick a topic or try all 12 questions in the quiz.</p></li><li><h3>Choose an answer</h3><p>For multiple-choice questions, choose one answer. For true/false questions, choose true or false. For select-all-that-apply questions, choose all the right answers and no wrong ones.</p></li><li><h3>Check the answer</h3><p>Press “Check answer” to see if it is right and learn why. Saved questions and answers stay in this browser. Clearing the site’s data removes them.</p></li></ol>
  <button class="button primary" id="start-exploring">View questions ${icon("arrow-right")}</button>`);
content.addEventListener("click", (e) => {
  if (e.target.closest("#start-exploring")) {
    closeModal();
    setView("explore");
  }
});
document
  .querySelectorAll("[data-quiz]")
  .forEach((b) => (b.onclick = startQuiz));
const resources = [
  {
    label: "HEALTHY HABITS",
    title: "Build healthy screen habits.",
    text: "Find simple ways to manage time on phones and apps.",
    name: "Google Digital Wellbeing",
    url: "https://wellbeing.google/",
  },
  {
    label: "ONLINE SAFETY",
    title: "Learn how to stay safe online.",
    text: "Find help with private information and online bullying.",
    name: "eSafety Commissioner",
    url: "https://www.esafety.gov.au/",
  },
  {
    label: "CHECKING FACTS",
    title: "Learn how to check a post.",
    text: "Learn how to spot false information and use the internet safely.",
    name: "Common Sense Education",
    url: "https://www.commonsense.org/education/digital-citizenship",
  },
];
function renderResources() {
  document.querySelector("#empty-state").hidden = true;
  grid.innerHTML = resources
    .map(
      (r) =>
        `<article class="question-card resource-card"><span class="eyebrow">${r.label}</span><h3>${r.title}</h3><p>${r.text}</p><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name} ${icon("arrow-up-right")}</a></article>`,
    )
    .join("");
}

hydrate();
render();
