import type { ReactNode } from "react";

import { CreatorShell } from "@/components/creator/CreatorShell";

export default function CreatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <CreatorShell>{children}</CreatorShell>;
}