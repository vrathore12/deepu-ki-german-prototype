/* ============================================
   Deepu Ki German — Placeholder Product Data
   Replace with real booklets + real cover/preview images later.
   ============================================ */

// Generates a simple gradient cover as a data-URI SVG so the prototype
// works fully offline with no external image dependencies.
function coverImg(title, sub, c1, c2){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#g)"/>
    <circle cx="500" cy="90" r="140" fill="rgba(255,255,255,0.08)"/>
    <circle cx="60" cy="740" r="180" fill="rgba(255,255,255,0.06)"/>
    <text x="50" y="120" font-family="Poppins, sans-serif" font-size="26" fill="rgba(255,255,255,0.85)" font-weight="700">DEUTSCH</text>
    <text x="50" y="420" font-family="Poppins, sans-serif" font-size="46" fill="#ffffff" font-weight="700">${title}</text>
    <text x="50" y="470" font-family="Inter, sans-serif" font-size="24" fill="rgba(255,255,255,0.85)">${sub}</text>
    <rect x="50" y="700" width="70" height="8" rx="4" fill="#D6A34A"/>
    <text x="50" y="750" font-family="Inter, sans-serif" font-size="20" fill="rgba(255,255,255,0.7)">deepu_ki_german</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const PRODUCTS = [
  {
    id: "a1-vocab-booklet",
    title: "A1 Vocabulary Booklet",
    short: "500+ everyday German words with Hindi meanings and example sentences.",
    price: 49,
    mrp: 99,
    level: "A1 Beginner",
    pages: 34,
    language: "Hindi → German",
    popular: true,
    colors: ["#24325B", "#3A4D82"],
    description: "A carefully curated list of the 500 most-used German words for absolute beginners, grouped by daily-life themes — greetings, family, food, numbers, time, and more. Every word includes gender (der/die/das), pronunciation tip, and a simple example sentence.",
    learn: [
      "500+ high-frequency A1 words organised by topic",
      "Correct article (der/die/das) for every noun",
      "Example sentence for real-context usage",
      "Hindi meaning + pronunciation guide",
      "Printable practice checklist"
    ],
    who: "Absolute beginners starting German from zero, and students preparing for Goethe A1 exam vocabulary.",
    toc: [
      ["Greetings & Introductions", "4 pages"],
      ["Family & People", "5 pages"],
      ["Food & Drinks", "6 pages"],
      ["Numbers & Time", "5 pages"],
      ["Daily Routine Words", "6 pages"],
      ["Practice Checklist", "8 pages"]
    ]
  },
  {
    id: "a1-grammar-basics",
    title: "A1 Grammar Basics",
    short: "German sentence structure, articles & basic verbs explained simply.",
    price: 69,
    mrp: 129,
    level: "A1 Beginner",
    pages: 42,
    language: "Hindi → German",
    popular: true,
    colors: ["#B8842E", "#D6A34A"],
    description: "A no-nonsense grammar booklet that breaks down German sentence structure, the three articles, present-tense verb conjugation and word order — explained in Hindi with plenty of solved examples so nothing feels confusing.",
    learn: [
      "Der, Die, Das — how to identify gender",
      "Present tense conjugation of regular verbs",
      "Sentence word order (Satzbau) rules",
      "Personal pronouns & their usage",
      "20+ solved practice sentences"
    ],
    who: "Beginners who found German grammar confusing in videos and want a clear, written reference.",
    toc: [
      ["Articles & Gender", "8 pages"],
      ["Pronouns", "5 pages"],
      ["Present Tense Verbs", "10 pages"],
      ["Sentence Structure", "9 pages"],
      ["Practice Exercises", "10 pages"]
    ]
  },
  {
    id: "a2-verb-conjugation",
    title: "A2 Verb Conjugation Pack",
    short: "100 most common verbs conjugated across all tenses with examples.",
    price: 79,
    mrp: 149,
    level: "A2 Elementary",
    pages: 48,
    language: "English → German",
    popular: false,
    colors: ["#2E7D5B", "#4FA37E"],
    description: "Master German verb conjugation with this reference pack covering the 100 most commonly used verbs in Präsens, Perfekt, and Präteritum — with English translations and usage notes for each.",
    learn: [
      "100 essential verbs fully conjugated",
      "Präsens, Perfekt & Präteritum forms",
      "Separable vs inseparable verb notes",
      "Common mistakes to avoid",
      "Quick-reference tables for revision"
    ],
    who: "A2-level students who want a single go-to verb reference instead of scattered notes.",
    toc: [
      ["Regular Verbs", "14 pages"],
      ["Irregular Verbs", "16 pages"],
      ["Separable Verbs", "10 pages"],
      ["Reference Tables", "8 pages"]
    ]
  },
  {
    id: "goethe-a1-mock-test",
    title: "Goethe A1 Mock Test Set",
    short: "5 full-length practice tests modeled on the real Goethe A1 exam.",
    price: 99,
    mrp: 199,
    level: "A1 Exam Prep",
    pages: 56,
    language: "Hindi → German",
    popular: true,
    colors: ["#C1443C", "#DE7169"],
    description: "Five complete mock tests covering Hören, Lesen, Schreiben and Sprechen sections, formatted exactly like the official Goethe-Institut A1 exam, with an answer key and scoring guide.",
    learn: [
      "5 full mock tests, exam-format",
      "Answer key with explanations",
      "Writing section sample answers",
      "Speaking section prompt cards",
      "Self-scoring guide"
    ],
    who: "Students booked for the Goethe A1 exam who want realistic practice before test day.",
    toc: [
      ["Mock Test 1–2", "18 pages"],
      ["Mock Test 3–4", "18 pages"],
      ["Mock Test 5", "9 pages"],
      ["Answer Keys", "11 pages"]
    ]
  },
  {
    id: "daily-conversation-phrases",
    title: "Daily Conversation Phrases",
    short: "200+ ready-to-use German phrases for real-life conversations.",
    price: 49,
    mrp: 89,
    level: "A1–A2",
    pages: 28,
    language: "Hindi → German",
    popular: false,
    colors: ["#3A4D82", "#6B7FC4"],
    description: "Skip the textbook grammar for a moment — this booklet gives you 200+ practical phrases for shopping, travel, small talk, and emergencies so you can start speaking German confidently right away.",
    learn: [
      "200+ situational phrases",
      "Travel & shopping conversations",
      "Small talk starters",
      "Polite requests & emergencies",
      "Audio-style pronunciation notes"
    ],
    who: "Anyone who wants to speak German casually without waiting to finish full grammar.",
    toc: [
      ["Greetings & Small Talk", "6 pages"],
      ["Shopping & Travel", "8 pages"],
      ["Restaurant & Food", "6 pages"],
      ["Emergencies & Help", "8 pages"]
    ]
  },
  {
    id: "b1-writing-templates",
    title: "B1 Letter & Email Writing Templates",
    short: "Ready-made formal & informal letter templates for the B1 exam.",
    price: 89,
    mrp: 159,
    level: "B1 Intermediate",
    pages: 38,
    language: "English → German",
    popular: false,
    colors: ["#24325B", "#7B8093"],
    description: "The Schreiben section trips up most B1 candidates. This booklet gives you 15 ready-to-adapt formal and informal letter/email templates covering the most common exam scenarios, plus connector-word cheat sheets.",
    learn: [
      "15 formal & informal letter templates",
      "Connector words (Konnektoren) cheat sheet",
      "Common exam scenarios covered",
      "Do's and don'ts checklist",
      "Sample examiner-style feedback"
    ],
    who: "B1 exam candidates who want a structured shortcut for the writing section.",
    toc: [
      ["Formal Letters", "12 pages"],
      ["Informal Emails", "10 pages"],
      ["Connector Words", "8 pages"],
      ["Checklist & Tips", "8 pages"]
    ]
  }
];

function money(n){ return "₹" + n; }
function getProduct(id){ return PRODUCTS.find(p => p.id === id); }
function getRelated(id, count){
  return PRODUCTS.filter(p => p.id !== id).slice(0, count || 3);
}
