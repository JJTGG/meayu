import type { ReactNode } from "react";

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

        <span className="creator-header-label">Workspace</span>
      </header>

      <main className="creator-main">{children}</main>
    </div>
  );
}