import { PeopleHeader } from "@/components/creator/people/PeopleHeader";
import { createClient } from "@/lib/supabase/server";

export default async function PeoplePage() {
  const supabase = await createClient();

  const { data, error: claimsError } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;

  if (claimsError || !userId) {
    return (
      <section className="workspace-page">
        <PeopleHeader />

        <div className="people-empty-state">
          <span className="people-empty-label">People</span>

          <h2>Your session could not be verified.</h2>

          <p>
            Please sign in again before viewing the people in your workspace.
          </p>

          <a className="button button-primary" href="/auth">
            Sign in
          </a>
        </div>
      </section>
    );
  }

  const { data: people, error: peopleError } = await supabase
    .from("people")
    .select("id, name, relationship, notes, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (peopleError) {
    return (
      <section className="workspace-page">
        <PeopleHeader />

        <div className="people-empty-state">
          <span className="people-empty-label">People</span>

          <h2>We couldn't load your people.</h2>

          <p>
            Your workspace is still protected. Please try loading this page
            again.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="workspace-page">
      <PeopleHeader />

      {people.length === 0 ? (
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
      ) : (
        <div className="people-list">
          {people.map((person) => (
            <article className="person-card" key={person.id}>
              <div>
                <span className="people-empty-label">Person</span>

                <h2>{person.name}</h2>

                {person.relationship ? (
                  <p className="person-card-relationship">
                    {person.relationship}
                  </p>
                ) : null}

                {person.notes ? (
                  <p className="person-card-notes">{person.notes}</p>
                ) : null}
              </div>

              <span className="person-card-date">
                Added{" "}
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                }).format(new Date(person.created_at))}
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
