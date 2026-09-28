export default function WorkspacePage() {
  return (
    <section className="workspace-page">
      <div className="workspace-intro">
        <p className="eyebrow">Your workspace</p>

        <h1>Make something for someone.</h1>

        <p>
          This is where you will create, prepare, review, and manage the things
          you make for people who matter to you.
        </p>
      </div>

      <div className="workspace-card">
        <div>
          <span className="workspace-card-label">Next step</span>

          <h2>Start with a person.</h2>

          <p>
            Tell Meayu who you are making something for. You can add the
            memories, messages, interests, stories, and photos that make the
            experience personal.
          </p>
        </div>

        <button className="button button-primary" type="button" disabled>
          Create a person
        </button>
      </div>
    </section>
  );
}