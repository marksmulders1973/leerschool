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

export const saveQuestionsToPool = (qs, subject, level, topic, textbookKey) => {
  if (!qs?.length) return;
  const rows = qs
    .filter(
      (q) =>
        q &&
        q.q &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        typeof q.answer === "number"
    )
    .map((q) => ({
      subject,
      level,
      topic: topic || null,
      textbook_key: textbookKey,
      question: q.q,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation || null,
      svg: q.svg || null,
      youtube_url: q.youtubeUrl || null,
      q_hash: computeQHash(q.q, subject, level),
    }));
  if (!rows.length) return;
  supabase
    .from("ai_question_pool")
    .upsert(rows, { onConflict: "q_hash", ignoreDuplicates: true })
    .then(() => {})
    .catch(() => {});
};

export const poolRowToQuestion = (r) => ({
  q: r.question,
  options: r.options,
  answer: r.answer,
  explanation: r.explanation || undefined,
  svg: r.svg || undefined,
  youtubeUrl: r.youtube_url || undefined,
});
