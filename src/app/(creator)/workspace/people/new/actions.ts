
"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

const MAX_NAME_LENGTH = 120;
const MAX_RELATIONSHIP_LENGTH = 80;
const MAX_CONTEXT_LENGTH = 4000;

export type CreatePersonState = {
  error: string | null;
};

function readTextField(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
}

export async function createPerson(
  _previousState: CreatePersonState,
  formData: FormData,
): Promise<CreatePersonState> {
  const name = readTextField(formData, "name");
  const relationship = readTextField(formData, "relationship");
  const context = readTextField(formData, "context");

  if (!name) {
    return {
      error: "Enter their name.",
    };
  }

  if (name.length > MAX_NAME_LENGTH) {
    return {
      error: `Keep their name to ${MAX_NAME_LENGTH} characters or fewer.`,
    };
  }

  if (relationship.length > MAX_RELATIONSHIP_LENGTH) {
    return {
      error: `Keep the relationship to ${MAX_RELATIONSHIP_LENGTH} characters or fewer.`,
    };
  }

  if (context.length > MAX_CONTEXT_LENGTH) {
    return {
      error: `Keep the context to ${MAX_CONTEXT_LENGTH.toLocaleString("en-US")} characters or fewer.`,
    };
  }

  try {
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
  } catch {
    return {
      error:
        "We could not complete this request. Check your connection and try again.",
    };
  }

  redirect("/workspace/people");
}
