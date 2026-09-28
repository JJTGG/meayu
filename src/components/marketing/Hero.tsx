export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Make something for someone.</p>

        <h1>
          Turn what you know about someone into something made specifically for
          them.
        </h1>

        <p className="hero-description">
          Memories, messages, photos, stories, and the things that matter.
          Meayu helps turn them into a personal digital experience you can
          review and give to someone.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#start">
            Make something
          </a>

          <a className="text-link" href="#how-it-works">
            See how it works
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="experience-card">
          <span className="card-label">made for</span>

          <strong>someone who matters.</strong>

          <div className="card-line" />

          <span className="card-note">
            A collection of memories, words, and moments — brought together
            into something personal.
          </span>
        </div>
      </div>
    </section>
  );
}