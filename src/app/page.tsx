export default function Home() {
  return (
    <main className="home">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/">
          meayu
        </a>

        <a className="nav-link" href="#how-it-works">
          How it works
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Make something for someone.</p>

          <h1>
            Turn what you know about someone into something made specifically
            for them.
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

      <section className="intro-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">The idea</p>

          <h2>
            You provide the meaning.
            <br />
            Meayu makes something from it.
          </h2>
        </div>

        <div className="process">
          <article>
            <span>01</span>
            <h3>Tell us about them</h3>
            <p>
              Give Meayu the memories, messages, interests, photos, and context
              that make this person who they are to you.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Make the experience</h3>
            <p>
              Meayu organizes the things you provide into a personal experience
              that you can review and shape.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Give it to them</h3>
            <p>
              When it feels right, approve it and share a private link with
              the person it was made for.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-section" id="start">
        <p className="eyebrow">Something worth making</p>

        <h2>
          Sometimes you already know what you want to say.
          <br />
          You just need somewhere to put it.
        </h2>

        <a className="button button-primary" href="#start">
          Make something
        </a>
      </section>

      <footer className="footer">
        <span>meayu</span>
        <span>Make something for someone.</span>
      </footer>
    </main>
  );
}