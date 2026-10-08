"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export type CreatePersonState = {
  error: string | null;
};

export async function createPerson(
  _previousState: CreatePersonState,
  formData: FormData,
): Promise<CreatePersonState> {
  const name = String(formData.get("name") ?? "").trim();
  const relationship = String(formData.get("relationship") ?? "").trim();
  const context = String(formData.get("context") ?? "").trim();

  if (!name) {
    return {
      error: "Enter their name.",
    };
  }

  const supabase = await createClient();
  const claimsResult = await supabase.auth.getClaims();
  const userId = claimsResult.data?.claims?.sub;

  if (claimsResult.error || !userId) {
    return {
      error: "Your session could not be verified. Please sign in again.",
    };
  }

  const { error } = await supabase.from("people").insert({
    user_id: userId,
    name,
    relationship: relationship || null,
    notes: context || null,
  });

  if (error) {
    return {
      error: "We could not save this person. Please try again.",
    };
  }

  redirect("/workspace/people");
}
