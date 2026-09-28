import { PeopleHeader } from "@/components/creator/people/PeopleHeader";

export default function WorkspacePage() {
  return (
    <section className="workspace-page">
      <PeopleHeader />

      <div className="workspace-empty-state">
        <span className="workspace-empty-label">Your people</span>

        <h2>No one here yet.</h2>

        <p>
          Start by adding the person you want to make something for. Their
          personal space will become the foundation for everything you create
          for them.
        </p>

        <a
          className="button button-primary"
          href="/workspace/people/new"
        >
          Add your first person
        </a>
      </div>
    </section>
  );
}