"use client";

import { useActionState } from "react";

import {
  createPerson,
  type CreatePersonState,
} from "@/app/(creator)/workspace/people/new/actions";

const initialState: CreatePersonState = {
  error: null,
};

export function PersonForm() {
  const [state, formAction, pending] = useActionState(
    createPerson,
    initialState,
  );

  return (
    <form className="person-form" action={formAction}>
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
            autoComplete="name"
            required
            disabled={pending}
          />
        </label>

        <label className="form-field">
          <span>Relationship</span>

          <input
            name="relationship"
            type="text"
            placeholder="e.g. friend, sister, partner"
            autoComplete="off"
            disabled={pending}
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Context</span>

          <textarea
            name="context"
            placeholder="Anything useful to remember about this person..."
            rows={6}
            disabled={pending}
          />
        </label>
      </div>

      {state.error ? (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      ) : null}

      <div className="person-form-actions">
        <a
          className="button button-secondary"
          href="/workspace/people"
          aria-disabled={pending}
        >
          Cancel
        </a>

        <button
          className="button button-primary"
          type="submit"
          disabled={pending}
        >
          {pending ? "Saving..." : "Continue"}
        </button>
      </div>

      <p className="form-note">
        Your person is saved privately to your Meayu workspace.
      </p>
    </form>
  );
}
