export function SiteNav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="/">
        meayu
      </a>

      <div className="nav-actions">
        <a className="nav-link" href="#how-it-works">
          How it works
        </a>

        <a className="nav-link nav-link-action" href="/workspace">
          Make something
        </a>
      </div>
    </nav>
  );
}