import supabase from "../../supabase.js";

// AI question pool helpers — Supabase-tabel `ai_question_pool` groeit met
// gegenereerde AI-vragen, zodat volgende quizzes uit de pool kunnen putten
// in plaats van opnieuw een AI-call te doen.

export const normalizePoolText = (s) =>
  String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

export const computeQHash = (question, subject, level) =>
  `${subject}|${level}|${normalizePoolText(question)}`.slice(0, 240);

export const buildTextbookKey = (textbook) => {
  if (!textbook?.bookName) return null;
  return [textbook.bookName, textbook.chapter || "", textbook.paragraph || textbook.topic || ""]
    .map((s) => String(s || "").trim())
    .join("|")
    .slice(0, 240);
};

export const fetchPoolQuestions = async (subject, level, topic, textbookKey, count) => {
  try {
    let query = supabase
      .from("ai_question_pool")
      .select("question, options, answer, explanation, svg, youtube_url")
      .eq("subject", subject)
      .eq("level", level);
    query = topic ? query.eq("topic", topic) : query.is("topic", null);
    query = textbookKey ? query.eq("textbook_key", textbookKey) : query.is("textbook_key", null);
    const { data } = await query.limit(Math.max(count * 5, 30));
    return data || [];
  } catch {
    return [];
  }
};

// saveQuestionsToPool VERWIJDERD (audit 16-07): de pool wordt server-side
// gevuld in api/generate-questions.js (service role). Het anon INSERT-recht
// op ai_question_pool is ingetrokken — iedereen kon vragen met een bewust
// foute answer-index in de gedeelde bank schuiven, waarna kinderen bij het
// nakijken een fout antwoord goed gerekend kregen (data-poisoning).

export const poolRowToQuestion = (r) => ({
  q: r.question,
  options: r.options,
  answer: r.answer,
  explanation: r.explanation || undefined,
  svg: r.svg || undefined,
  youtubeUrl: r.youtube_url || undefined,
});
