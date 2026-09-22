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
const questions = [
  {
    id: 1,
    type: "positive",
    title: "Has social media helped you feel more connected?",
    description:
      "Think about the people and communities you’ve found along the way.",
    insight:
      "An online community can help us feel understood, especially when our interests or experiences aren’t shared by the people nearby. What matters is the quality of that connection, not the number of followers.",
    prompt:
      "Think of one connection that has made a difference. What makes it meaningful?",
  },
  {
    id: 2,
    type: "challenge",
    title: "Do you ever compare your life to someone else’s feed?",
    description:
      "Highlight reels can change how we see our own everyday moments.",
    insight:
      "A feed is a selection of moments, not a whole life. When comparison shows up, it can help to notice what you’re comparing: someone else’s public highlight or your private reality.",
    prompt:
      "Which kinds of posts bring up comparison? How could you respond with more kindness to yourself?",
  },
  {
    id: 3,
    type: "balance",
    title: "What does a healthy amount of scrolling look like for you?",
    description:
      "There’s no magic number. Let’s find what feels right for your life.",
    insight:
      "Time is only one piece of the puzzle. How you feel afterward, what you do online, and whether it crowds out sleep or relationships can be more useful signals.",
    prompt: "What’s one sign that it’s time to put your phone down?",
  },
  {
    id: 4,
    type: "positive",
    title: "What’s something new you’ve learned from your feed?",
    description:
      "From a small life skill to a whole new way of seeing the world.",
    insight:
      "Social platforms can make learning accessible and introduce us to new perspectives. Checking who is sharing information and looking for original sources helps turn curiosity into informed understanding.",
    prompt: "What did you learn, and how could you check that it’s reliable?",
  },
  {
    id: 5,
    type: "challenge",
    title: "How do you feel after spending time on social media?",
    description:
      "Energized, inspired, or a little drained? It’s worth noticing.",
    insight:
      "Different content and different ways of using social media can leave you feeling very differently. Paying attention to your own patterns can be more helpful than labeling all social media good or bad.",
    prompt: "Think about your last scroll. How did you feel before and after?",
  },
  {
    id: 6,
    type: "balance",
    title: "Is your feed a place you actually want to be?",
    description:
      "A few intentional changes can make your digital space feel more like you.",
    insight:
      "You don’t have to keep following an account just because you once enjoyed it. Muting, unfollowing, and choosing “not interested” can help shape a feed that supports your interests and well-being.",
    prompt: "What would you like to see more of—and less of—in your feed?",
  },
  {
    id: 7,
    type: "positive",
    title: "Has sharing online helped you express yourself?",
    description:
      "Creativity can start with one little post and a bit of courage.",
    insight:
      "Sharing art, ideas, or everyday experiences can be a creative outlet. Consider what feels satisfying about the process, separate from the likes and reactions it receives.",
    prompt:
      "What would you love to create or share, even if likes weren’t visible?",
  },
  {
    id: 8,
    type: "challenge",
    title: "Do notifications make it hard to be in the moment?",
    description: "A small ping can pull your attention away from what matters.",
    insight:
      "Notifications invite us to switch attention, even when the update can wait. Choosing which alerts reach you is a small boundary that can make offline moments feel less interrupted.",
    prompt:
      "Which notifications genuinely help you? Which could you turn off today?",
  },
  {
    id: 9,
    type: "balance",
    title: "What would a phone-free moment give back to you?",
    description:
      "A quieter morning, a better conversation, or simply room to breathe.",
    insight:
      "A boundary doesn’t have to mean quitting social media. A small, specific phone-free moment can create space for something you value without becoming an all-or-nothing rule.",
    prompt:
      "Choose one daily moment you’d like to protect. What will you do instead?",
  },
  {
    id: 10,
    type: "positive",
    title: "Can your online voice make a positive difference?",
    description: "Small acts of support can travel further than you think.",
    insight:
      "Encouragement, sharing useful resources, and supporting causes can all start online. Before resharing a cause or fundraiser, check its source and think about what practical help is needed.",
    prompt:
      "What is one thoughtful action you could take in your online community?",
  },
  {
    id: 11,
    type: "challenge",
    title: "How much of your life are you comfortable sharing?",
    description:
      "Your personal information deserves a little thought before you hit post.",
    insight:
      "Posts can reach beyond their original audience. Privacy settings help, but they can’t stop someone from taking a screenshot. Consider location details, personal information, and other people’s consent.",
    prompt:
      "What’s one thing you’d prefer to keep offline? Do your privacy settings match that choice?",
  },
  {
    id: 12,
    type: "balance",
    title: "Are you opening the app with a purpose—or out of habit?",
    description:
      "A tiny pause can turn an automatic scroll into an intentional choice.",
    insight:
      "Checking your phone can become a default response to boredom or a quiet moment. A short pause to ask “What am I here for?” can help you decide whether opening the app serves you right now.",
    prompt:
      "The next time you reach for your phone, what question could you ask yourself?",
  },
];
let storageAvailable = true;
const readStore = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    storageAvailable = false;
    return fallback;
  }
};
let saved = readStore("perspective-saved", []),
  reflections = readStore("perspective-reflections", {});
if (!Array.isArray(saved)) saved = [];
if (
  !reflections ||
  typeof reflections !== "object" ||
  Array.isArray(reflections)
)
  reflections = {};
let view = "explore",
  filter = "all",
  query = "",
  limit = 6;
const grid = document.querySelector("#question-grid"),
  modal = document.querySelector("#modal"),
  content = document.querySelector("#modal-content");
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function persist() {
  try {
    localStorage.setItem("perspective-saved", JSON.stringify(saved));
    localStorage.setItem(
      "perspective-reflections",
      JSON.stringify(reflections),
    );
    return true;
  } catch {
    storageAvailable = false;
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
  document.querySelector("#reflection-count").textContent = new Set([
    ...saved,
    ...Object.keys(reflections).map(Number),
  ]).size;
  document
    .querySelector(".question-toolbar")
    .classList.toggle("view-hidden", view === "resources");
  document
    .querySelector(".load-row")
    .classList.toggle("view-hidden", view === "resources");
  document
    .querySelector("#question-total")
    .classList.toggle("view-hidden", view !== "explore");
  if (view === "resources") {
    renderResources();
    return;
  }
  let list = questions.filter(
    (q) =>
      (view !== "reflections" || saved.includes(q.id) || reflections[q.id]) &&
      (filter === "all" || q.type === filter) &&
      `${q.title} ${q.description}`.toLowerCase().includes(query),
  );
  grid.innerHTML = list
    .slice(0, limit)
    .map((q) => {
      const cat = categories[q.type];
      return `<article class="question-card"><div class="card-top"><span class="badge ${q.type}">${icon(cat.icon)}${cat.label}</span><button class="icon-button ${saved.includes(q.id) ? "saved" : ""}" data-save="${q.id}" aria-label="${saved.includes(q.id) ? "Unsave" : "Save"} question: ${escape(q.title)}" aria-pressed="${saved.includes(q.id)}">${icon("bookmark")}</button></div><h3>${q.title}</h3><p>${q.description}</p>${view === "reflections" && reflections[q.id] ? `<p class="reflected-text">${escape(reflections[q.id])}</p>` : ""}<div class="card-bottom"><span>${icon(reflections[q.id] ? "check" : "clock")}${reflections[q.id] ? "Reflection added" : "2 min reflection"}</span><button data-question="${q.id}">${reflections[q.id] ? "Keep reflecting" : "Let’s reflect"} ${icon("arrow-right")}</button></div></article>`;
    })
    .join("");
  document.querySelector("#empty-state").hidden = list.length > 0;
  document.querySelector("#empty-title").textContent =
    view === "reflections" && !query && filter === "all"
      ? "Your next insight starts here."
      : "No questions found.";
  document.querySelector("#empty-copy").textContent =
    view === "reflections" && !query && filter === "all"
      ? "Save a question with the bookmark icon, or write a reflection. You’ll find it here."
      : "Try another search or explore a different perspective.";
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
    explore: "A question can change your perspective.",
    reflections: "A little space for your perspective.",
    resources: "Good reads. Thoughtful next steps.",
  }[view];
  document.querySelector("#section-description").textContent = {
    explore:
      "There are no perfect answers. Just a chance to get to know your digital self.",
    reflections:
      "Your saved questions and personal reflections. Stored only in this browser.",
    resources:
      "Explore practical guidance for a more intentional relationship with social media.",
  }[view];
  render();
  document.querySelector("#questions").scrollIntoView({ behavior: "smooth" });
}
function openModal(html) {
  content.innerHTML = html;
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.close();
  document.body.style.overflow = "";
}
document.querySelector("#close-modal").onclick = closeModal;
modal.addEventListener("close", () => (document.body.style.overflow = ""));
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      closeModal();
  }
});
function openQuestion(id) {
  const q = questions.find((q) => q.id === id),
    cat = categories[q.type];
  openModal(
    `<span class="badge ${q.type}">${icon(cat.icon)}${cat.label}</span><h2>${q.title}</h2><p>${q.description}</p><div class="insight"><strong>A little perspective</strong><br>${q.insight}</div><label for="reflection-input">${q.prompt}</label><textarea id="reflection-input" maxlength="3000" placeholder="Your thoughts, in your own words…">${escape(reflections[q.id] || "")}</textarea><div class="modal-actions"><span class="privacy-note">Just for you. Saved in this browser.</span><button class="button primary" id="save-reflection">Save reflection ${icon("arrow-right")}</button></div>${reflections[q.id] ? '<button class="text-button" id="delete-reflection">Delete this reflection</button>' : ""}`,
  );
  document.querySelector("#save-reflection").onclick = () => {
    const value = document.querySelector("#reflection-input").value.trim();
    if (!value) {
      toast("Add a thought before saving.");
      document.querySelector("#reflection-input").focus();
      return;
    }
    reflections[id] = value;
    const stored = persist();
    render();
    closeModal();
    toast(
      stored
        ? "A little clarity, saved."
        : "Saved for this visit only. Browser storage is unavailable.",
    );
  };
  const deleteButton = document.querySelector("#delete-reflection");
  if (deleteButton)
    deleteButton.onclick = () => {
      delete reflections[id];
      persist();
      render();
      closeModal();
      toast("Reflection deleted.");
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
          ? "Question saved to My reflections."
          : "Question removed from saved."
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
  openModal(
    `<div class="eyebrow">A LITTLE SPACE TO THINK</div><h2>Curiosity, without the judgment.</h2><p>Social media isn’t all good or all bad. Perspective helps you explore what it means for you.</p><ol class="steps"><li><h3>Find a question</h3><p>Explore the positives, the challenges, or the space in between.</p></li><li><h3>Pause and reflect</h3><p>Read a fresh perspective, then put your own thoughts into words. There’s no right answer.</p></li><li><h3>Make it your own</h3><p>Save what resonates and try one small change. Your reflections stay in this browser, not an account. Clearing browser data removes them.</p></li></ol><button class="button primary" id="start-exploring">Find my first question ${icon("arrow-right")}</button>`,
  );
content.addEventListener("click", (e) => {
  if (e.target.closest("#start-exploring")) {
    closeModal();
    setView("explore");
  }
});
const resources = [
  {
    label: "DIGITAL WELL-BEING",
    title: "Make your phone work for you.",
    text: "Explore tools and everyday ideas for more intentional technology use.",
    name: "Google Digital Wellbeing",
    url: "https://wellbeing.google/",
  },
  {
    label: "ONLINE SAFETY",
    title: "Feel safer in your digital space.",
    text: "Find guidance on privacy, online bullying, and navigating difficult experiences.",
    name: "eSafety Commissioner",
    url: "https://www.esafety.gov.au/",
  },
  {
    label: "MEDIA LITERACY",
    title: "Bring a critical eye to your feed.",
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
const quiz = [
  {
    title: "How do you usually feel after a scroll?",
    options: [
      "Inspired or connected",
      "It depends on the day",
      "Drained or not quite myself",
    ],
  },
  {
    title: "How often does your phone interrupt what matters?",
    options: [
      "Rarely—I have a rhythm that works",
      "Sometimes, more than I’d like",
      "Often—it’s hard to switch off",
    ],
  },
  {
    title: "Does your feed reflect what you care about?",
    options: [
      "Mostly—it feels like my kind of space",
      "Some of it, but it could use a refresh",
      "Not really—I scroll on autopilot",
    ],
  },
  {
    title: "How easy is it to step away when you want to?",
    options: [
      "Usually pretty easy",
      "Easier some days than others",
      "Honestly, it can be difficult",
    ],
  },
];
let quizAnswers = [],
  quizStep = 0;
function showQuiz() {
  const q = quiz[quizStep];
  openModal(
    `<div class="eyebrow">YOUR GENTLE CHECK-IN · ${quizStep + 1} OF ${quiz.length}</div><div class="quiz-progress">${quiz.map((_, i) => `<i class="${i <= quizStep ? "done" : ""}"></i>`).join("")}</div><h2>${q.title}</h2><p>Think about the past week. Pick the answer that feels closest.</p><div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option ${quizAnswers[quizStep] === i ? "selected" : ""}" data-answer="${i}">${o}</button>`).join("")}</div><div class="modal-actions">${quizStep ? '<button class="text-button" id="quiz-back">← Previous question</button>' : '<span class="privacy-note">No scores. No labels. Just a little awareness.</span>'}</div>`,
  );
  content.querySelectorAll("[data-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        quizAnswers[quizStep] = Number(b.dataset.answer);
        if (quizStep < quiz.length - 1) {
          quizStep++;
          showQuiz();
        } else showResult();
      }),
  );
  const back = content.querySelector("#quiz-back");
  if (back)
    back.onclick = () => {
      quizStep--;
      showQuiz();
    };
}
function showResult() {
  const total = quizAnswers.reduce((a, b) => a + b, 0);
  const title =
    total <= 2
      ? "Keep what’s working for you."
      : total <= 5
        ? "A little intention can go a long way."
        : "You deserve a little breathing room.";
  const intro =
    total <= 2
      ? "It sounds like social media often adds something positive to your day. Keep noticing the habits that help you feel that way."
      : total <= 5
        ? "There’s some good in your feed, and some room to make it feel better. You don’t need a complete reset—start small."
        : "Your answers suggest that being online can feel demanding lately. You don’t have to change everything at once. Give yourself permission to make a little space.";
  const tips = [
    quizAnswers[0] > 0
      ? "Notice how you feel before and after your next scroll."
      : "Reach out to someone who makes your online time feel meaningful.",
    quizAnswers[1] > 0
      ? "Switch off one non-essential notification today."
      : "Protect a phone-free moment that already works for you.",
    quizAnswers[2] > 0
      ? "Mute one account that drains you and find one that inspires you."
      : "Keep curating your feed as your interests change.",
    quizAnswers[3] > 0
      ? "Try leaving your phone out of reach for one meal."
      : "Choose a clear intention before you open an app.",
  ];
  openModal(
    `<span class="badge balance">${icon("leaf")} Your moment of perspective</span><h2>${title}</h2><p>${intro}</p><div class="insight"><strong>A few small things to try</strong><ul class="result-list">${tips.map((t) => `<li>${t}</li>`).join("")}</ul></div><p class="privacy-note">This is a personal reflection, not a mental health assessment. If social media is affecting your daily life or well-being, consider talking with someone you trust or a qualified professional.</p><div class="modal-actions"><button class="button primary" id="balance-questions">Explore finding balance ${icon("arrow-right")}</button><button class="text-button" id="quiz-restart">Start again</button></div>`,
  );
  content.querySelector("#balance-questions").onclick = () => {
    closeModal();
    setView("explore");
    document.querySelector('[data-filter="balance"]').click();
  };
  content.querySelector("#quiz-restart").onclick = startQuiz;
}
function startQuiz() {
  quizAnswers = [];
  quizStep = 0;
  showQuiz();
}
document
  .querySelectorAll("[data-check]")
  .forEach((b) => (b.onclick = startQuiz));
hydrate();
render();
