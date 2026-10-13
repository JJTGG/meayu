
import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

function safeNextPath(value: string | null, origin: string) {
  if (
    !value ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\") ||
    /[\u0000-\u001f\u007f]/.test(value)
  ) {
    return "/workspace";
  }

  try {
    const target = new URL(value, origin);

    if (target.origin !== origin) {
      return "/workspace";
    }

    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return "/workspace";
  }
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = safeNextPath(
    requestUrl.searchParams.get("next"),
    requestUrl.origin,
  );

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
