import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

function safeNextPath(value: string | null) {
  if (!value) {
    return "/workspace";
  }

  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/workspace";
  }

  return value;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = safeNextPath(requestUrl.searchParams.get("next"));

  if (!code) {
    return NextResponse.redirect(
      new URL("/auth?error=callback", requestUrl.origin),
    );
  }

  const supabase = await createClient();

  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    return NextResponse.redirect(
      new URL("/auth?error=callback", requestUrl.origin),
    );
  }

  const { data, error: claimsError } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  if (claimsError || !userId) {
    await supabase.auth.signOut();

    return NextResponse.redirect(
      new URL("/auth?error=callback", requestUrl.origin),
    );
  }

  const { error: appUserError } = await supabase
    .from("users")
    .upsert({ id: userId }, { onConflict: "id" });

  if (appUserError) {
    await supabase.auth.signOut();

    return NextResponse.redirect(
      new URL("/auth?error=callback", requestUrl.origin),
    );
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}