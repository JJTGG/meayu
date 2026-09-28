export function PersonForm() {
  return (
    <form className="person-form">
      <div className="person-form-heading">
        <p className="eyebrow">New person</p>

        <h1>Start with who they are.</h1>

        <p>
          You can keep this simple for now. More personal context can be added
          as you prepare what you want to make.
        </p>
      </div>

      <div className="person-form-fields">
        <label className="form-field">
          <span>Name</span>
          <input
            name="name"
            type="text"
            placeholder="Their name"
            autoComplete="off"
          />
        </label>

        <label className="form-field">
          <span>Relationship</span>
          <input
            name="relationship"
            type="text"
            placeholder="e.g. friend, sister, partner"
            autoComplete="off"
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Context</span>
          <textarea
            name="context"
            placeholder="Anything useful to remember about this person..."
            rows={6}
          />
        </label>
      </div>

      <div className="person-form-actions">
        <a className="button button-secondary" href="/workspace/people">
          Cancel
        </a>

        <button className="button button-primary" type="submit">
          Continue
        </button>
      </div>

      <p className="form-note">
        Nothing is saved yet. Persistence will be connected in the next slice.
      </p>
    </form>
  );
}