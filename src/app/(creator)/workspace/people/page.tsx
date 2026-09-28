import { PeopleHeader } from "@/components/creator/people/PeopleHeader";

export default function PeoplePage() {
  return (
    <section className="workspace-page">
      <PeopleHeader />

      <div className="people-empty-state">
        <span className="people-empty-label">People</span>

        <h2>Your people will appear here.</h2>

        <p>
          Once you add someone, this becomes their starting point. You’ll be
          able to build the context that Meayu uses to make something
          specifically for them.
        </p>

        <a
          className="button button-primary"
          href="/workspace/people/new"
        >
          Add a person
        </a>
      </div>
    </section>
  );
}