import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { CreatorShell } from "@/components/creator/CreatorShell";
import { createClient } from "@/lib/supabase/server";

export default async function CreatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { claims },
    error,
  } = await supabase.auth.getClaims();

  if (error || !claims?.sub) {
    redirect("/auth");
  }

  return <CreatorShell>{children}</CreatorShell>;
}