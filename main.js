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
  positive: { label: "The positives", icon: "sun" },
  challenge: { label: "The challenges", icon: "cloud" },
  balance: { label: "Finding balance", icon: "balance" },
};
const formats = {
  multiple: { label: "Multiple choice", instruction: "Choose one answer." },
  select: {
    label: "Select all that apply",
    instruction:
      "Select all correct answers. Full credit requires every correct option and no incorrect options.",
  },
  boolean: { label: "True / false", instruction: "Choose true or false." },
};
const questions = [
  {
    id: 1,
    type: "positive",
    format: "multiple",
    title: "Which is a potential benefit of social media?",
    description: "Explore how online platforms can bring communities together.",
    options: [
      "Guaranteeing that all information is accurate",
      "Connecting people with shared interests across distances",
      "Removing the need for offline relationships",
      "Preventing all disagreements",
    ],
    correct: [1],
    explanation:
      "Social media can connect people across geographic boundaries and help communities form around shared interests. It does not guarantee accurate information, replace offline relationships, or eliminate disagreements.",
  },
  {
    id: 2,
    type: "challenge",
    format: "select",
    title: "Which are potential risks of social media use?",
    description: "Identify challenges that can arise on social platforms.",
    options: [
      "Cyberbullying and harassment",
      "Exposure to misleading information",
      "Access to educational communities",
      "Sharing personal information beyond its intended audience",
    ],
    correct: [0, 1, 3],
    explanation:
      "Harassment, misinformation, and unintended exposure of personal information are potential risks. Access to educational communities is a potential benefit, not a risk in itself. Experiences vary by platform, content, and how people use it.",
  },
  {
    id: 3,
    type: "balance",
    format: "boolean",
    title: "There is one ideal daily social media time limit for everyone.",
    description:
      "Consider whether healthy use can be defined by a single number.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "No single time limit suits everyone. Age, needs, content, and context matter, as does whether social media interferes with sleep, responsibilities, or relationships.",
  },
  {
    id: 4,
    type: "positive",
    format: "select",
    title: "How can social media support learning?",
    description: "Recognize constructive ways to share knowledge online.",
    options: [
      "Sharing educational tutorials",
      "Making popular posts automatically reliable",
      "Connecting learners with knowledgeable communities",
      "Introducing different perspectives",
    ],
    correct: [0, 2, 3],
    explanation:
      "Tutorials, learning communities, and different perspectives can support learning. Popularity does not establish accuracy; information still needs to be evaluated against reliable sources.",
  },
  {
    id: 5,
    type: "challenge",
    format: "boolean",
    title: "A post with thousands of likes must contain accurate information.",
    description: "Separate popularity from reliability.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "Likes indicate engagement, not fact-checking. Misleading posts can be popular. Checking the original source, evidence, date, and independent reliable reporting is a better way to assess a claim.",
  },
  {
    id: 6,
    type: "balance",
    format: "multiple",
    title:
      "Which action best helps assess an unfamiliar claim before sharing it?",
    description: "Explore a practical media-literacy skill.",
    options: [
      "Trusting it because a friend shared it",
      "Checking only the number of comments",
      "Checking the original source and comparing reliable sources",
      "Sharing it quickly before the trend ends",
    ],
    correct: [2],
    explanation:
      "Tracing a claim to its original source and checking independent, reliable sources helps assess its accuracy. Familiarity, comment counts, and urgency are not evidence that a claim is true.",
  },
  {
    id: 7,
    type: "positive",
    format: "boolean",
    title:
      "Social media can help small businesses reach customers beyond their local area.",
    description: "Explore opportunities created by online visibility.",
    options: ["True", "False"],
    correct: [0],
    explanation:
      "Social platforms can help small businesses showcase products and communicate with wider audiences. This creates opportunities, but it does not guarantee sales or business success.",
  },
  {
    id: 8,
    type: "challenge",
    format: "multiple",
    title: "Why can social media encourage unrealistic comparisons?",
    description: "Understand the difference between a feed and a full picture.",
    options: [
      "Feeds always show every part of a person’s life",
      "Posts may show selected highlights rather than everyday reality",
      "Every photo on social media is fake",
      "All users have identical experiences",
    ],
    correct: [1],
    explanation:
      "People often share selected highlights. Comparing those highlights with an entire everyday life can create unrealistic expectations. This does not mean that every post is false or that everyone responds in the same way.",
  },
  {
    id: 9,
    type: "balance",
    format: "select",
    title: "Which practices can support more balanced social media use?",
    description: "Identify practical ways to reduce unnecessary interruptions.",
    options: [
      "Turning off non-essential notifications",
      "Setting aside phone-free time for sleep or focused tasks",
      "Keeping every notification on to avoid missing any update",
      "Choosing specific times to check apps",
    ],
    correct: [0, 1, 3],
    explanation:
      "Reducing unnecessary notifications, protecting offline time, and checking apps intentionally can support balance. Keeping every alert active may add interruptions rather than reduce them.",
  },
  {
    id: 10,
    type: "positive",
    format: "multiple",
    title: "Which example shows a constructive use of social media?",
    description:
      "Look at how online communication can support community action.",
    options: [
      "Posting someone’s address without permission",
      "Sharing an unverified emergency rumor",
      "Encouraging harassment of people who disagree",
      "Sharing verified details about a community volunteer event",
    ],
    correct: [3],
    explanation:
      "Sharing verified event details can help communities organize and participate. Posting private information, spreading rumors, and encouraging harassment can cause harm.",
  },
  {
    id: 11,
    type: "challenge",
    format: "select",
    title: "Which actions can increase privacy risks on social media?",
    description: "Understand how information can reach unintended audiences.",
    options: [
      "Posting a home address publicly",
      "Reviewing who can see a post",
      "Sharing live location details with a public audience",
      "Posting another person’s private details without permission",
    ],
    correct: [0, 2, 3],
    explanation:
      "Public addresses, live location details, and other people’s private information can expose people to unwanted attention or misuse. Reviewing audience settings can help reduce exposure, though screenshots and resharing remain possible.",
  },
  {
    id: 12,
    type: "balance",
    format: "boolean",
    title:
      "Privacy settings guarantee that a post can never be copied or shared elsewhere.",
    description: "Consider the limits of audience controls.",
    options: ["True", "False"],
    correct: [1],
    explanation:
      "Privacy settings help control who initially sees a post, but viewers may still take screenshots, copy it, or share it elsewhere. Audience controls cannot guarantee that information stays private.",
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
      : "Try another search or explore a different topic.";
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
    explore: "A question can change a perspective.",
    saved: "Good questions are worth revisiting.",
    resources: "Good reads. Thoughtful next steps.",
  }[view];
  document.querySelector("#section-description").textContent = {
    explore:
      "Explore the facts with multiple-choice, select-all-that-apply, and true/false questions.",
    saved:
      "Bookmarked questions, ready to revisit. Saved only in this browser.",
    resources:
      "Explore practical guidance on digital well-being, online safety, and media literacy.",
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
    ${inQuiz ? `<div class="eyebrow">KNOWLEDGE QUIZ · ${quizStep + 1} OF ${questions.length}</div><div class="quiz-progress" aria-hidden="true">${questions.map((_, i) => `<i class="${i <= quizStep ? "done" : ""}"></i>`).join("")}</div>` : ""}
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
        <h3 id="feedback-heading">${result ? "Correct!" : "Not quite. Here’s why."}</h3>
        <p><strong>${q.correct.length > 1 ? "Correct answers" : "Correct answer"}:</strong> ${q.correct.map((i) => escape(q.options[i])).join("; ")}</p>
        <p>${q.explanation}</p>
      </section>`
          : ""
      }
      <div class="modal-actions">
        ${inQuiz && quizStep > 0 ? '<button class="text-button" type="button" id="quiz-back">← Previous question</button>' : '<span class="privacy-note">General knowledge. No personal questions.</span>'}
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
        "Progress saved for this visit only. Browser storage is unavailable.",
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
  openModal(`<div class="eyebrow">KNOWLEDGE QUIZ COMPLETE</div><h2>${score === questions.length ? "A well-rounded perspective!" : "Every question is a chance to learn."}</h2>
    <div class="quiz-score"><strong>${score} / ${questions.length}</strong><span>questions correct</span></div>
    <p>One point per correct question. Select-all questions require all correct options and no extras. Review the explanations below to keep learning.</p>
    <div class="quiz-review">${questions
      .map(
        (
          q,
          i,
        ) => `<details><summary>${icon(isCorrect(q, quizAttempts[i].selected) ? "check" : "x")}<span>${i + 1}. ${q.title}<small>${isCorrect(q, quizAttempts[i].selected) ? "Correct" : "Incorrect"} · ${formats[q.format].label}</small></span></summary>
      <p><strong>Selected:</strong> ${quizAttempts[i].selected.map((n) => escape(q.options[n])).join("; ")}</p>
      <p><strong>Correct:</strong> ${q.correct.map((n) => escape(q.options[n])).join("; ")}</p><p>${q.explanation}</p></details>`,
      )
      .join("")}</div>
    <div class="modal-actions"><button class="text-button" id="quiz-restart">Retake quiz</button><button class="button primary" id="finish-quiz">Explore questions ${icon("arrow-right")}</button></div>`);
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
        : "Updated for this visit only. Browser storage is unavailable.",
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
  openModal(`<div class="eyebrow">LEARN BOTH SIDES</div><h2>A little knowledge. A broader perspective.</h2><p>Explore general facts about social media’s benefits, risks, and responsible use. No personal experiences or private information needed.</p>
  <ol class="steps"><li><h3>Choose a question</h3><p>Browse by topic or take the full 12-question knowledge quiz.</p></li><li><h3>Select an answer</h3><p>Choose one answer for multiple-choice and true/false questions. For select-all-that-apply questions, choose every correct option and no incorrect options.</p></li><li><h3>Learn from the explanation</h3><p>Check an answer for feedback, then keep exploring. Bookmarks and the latest checked answers stay in this browser. Clearing site data removes them.</p></li></ol>
  <button class="button primary" id="start-exploring">Explore questions ${icon("arrow-right")}</button>`);
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
    label: "DIGITAL WELL-BEING",
    title: "Tools for digital well-being.",
    text: "Explore tools and everyday ideas for more intentional technology use.",
    name: "Google Digital Wellbeing",
    url: "https://wellbeing.google/",
  },
  {
    label: "ONLINE SAFETY",
    title: "Understand online safety.",
    text: "Find guidance on privacy, online bullying, and navigating difficult experiences.",
    name: "eSafety Commissioner",
    url: "https://www.esafety.gov.au/",
  },
  {
    label: "MEDIA LITERACY",
    title: "Learn to evaluate online information.",
    text: "Explore resources about digital citizenship, online information, and media habits.",
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
