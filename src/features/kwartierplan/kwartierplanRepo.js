// Supabase-CRUD voor het Kwartierplan (sessie 1: doel + startfoto).
// Alles keyt op parent_user_id + child_name — kinderen hebben geen account
// (zelfde model als parent_child_links). RLS: ouder ziet alleen eigen rijen.

import supabase from "../../supabase.js";

export async function loadKwartierplan(parentUserId, childName) {
  const [goalRes, fotoRes] = await Promise.all([
    supabase.from("learning_goals")
      .select("*")
      .eq("parent_user_id", parentUserId)
      .eq("child_name", childName)
      .maybeSingle(),
    supabase.from("diagnostic_assessments")
      .select("*")
      .eq("parent_user_id", parentUserId)
      .eq("child_name", childName)
      .order("taken_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);
  return {
    goal: goalRes.data || null,
    laatsteFoto: fotoRes.data || null,
    error: goalRes.error || fotoRes.error || null,
  };
}

export async function saveGoal({ parentUserId, childName, targetLevel, targetEvent, targetDate, currentGrade }) {
  const { data, error } = await supabase.from("learning_goals")
    .upsert({
      parent_user_id: parentUserId,
      child_name: childName,
      target_level: targetLevel,
      target_event: targetEvent,
      target_date: targetDate || null,
      current_grade: currentGrade || null,
      updated_at: new Date().toISOString(),
    }, { onConflict: "parent_user_id,child_name" })
    .select()
    .maybeSingle();
  return { data, error };
}

export async function saveStartfoto({ parentUserId, childName, perPijlerScores, recommendedPaths, questionsTotal, correctTotal, avgSeconds, rushed, isBaseline }) {
  const { data, error } = await supabase.from("diagnostic_assessments")
    .insert({
      parent_user_id: parentUserId,
      child_name: childName,
      per_pijler_scores: perPijlerScores,
      recommended_paths: recommendedPaths,
      questions_total: questionsTotal,
      correct_total: correctTotal,
      avg_seconds_per_question: avgSeconds,
      rushed,
      is_baseline: isBaseline,
    })
    .select()
    .maybeSingle();
  return { data, error };
}
