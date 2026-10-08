import type { ReactNode } from "react";

import { signOut } from "@/app/(creator)/actions";

type CreatorShellProps = {
  children: ReactNode;
};

export function CreatorShell({ children }: CreatorShellProps) {
  return (
    <div className="creator-shell">
      <header className="creator-header">
        <a className="creator-brand" href="/">
          meayu
        </a>

        <nav className="creator-nav" aria-label="Creator navigation">
          <a href="/workspace/people">People</a>

          <form action={signOut}>
            <button type="submit">Sign out</button>
          </form>
        </nav>
      </header>

      <main className="creator-main">{children}</main>
    </div>
  );
}