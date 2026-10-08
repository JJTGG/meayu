import Link from "next/link";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

type PersonPageProps = {
  params: Promise<{
    personId: string;
  }>;
};

export default async function PersonPage({ params }: PersonPageProps) {
  const { personId } = await params;
  const supabase = await createClient();

  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  const userId = claimsData?.claims?.sub;

  if (claimsError || !userId) {
    return (
      <section className="workspace-page">
        <div className="people-empty-state">
          <span className="people-empty-label">Person</span>

          <h2>Your session could not be verified.</h2>

          <p>Please sign in again to open this person’s space.</p>

          <Link className="button button-primary" href="/auth">
            Sign in
          </Link>
        </div>
      </section>
    );
  }

  const { data: person, error } = await supabase
    .from("people")
    .select("id, name, relationship, notes, created_at")
    .eq("id", personId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    return (
      <section className="workspace-page">
        <div className="people-empty-state">
          <span className="people-empty-label">Person</span>

          <h2>We couldn't open this person.</h2>

          <p>Please try again.</p>

          <Link className="button button-secondary" href="/workspace/people">
            Back to people
          </Link>
        </div>
      </section>
    );
  }

  if (!person) {
    notFound();
  }

  return (
    <section className="workspace-page">
      <div className="person-space">
        <Link className="people-back-link" href="/workspace/people">
          ← People
        </Link>

        <div className="person-space-header">
          <span className="people-empty-label">Person</span>

          <h1>{person.name}</h1>

          {person.relationship ? (
            <p className="person-card-relationship">
              {person.relationship}
            </p>
          ) : null}
        </div>

        <div className="person-space-body">
          <section className="person-space-section">
            <span className="people-empty-label">Context</span>

            {person.notes ? (
              <p>{person.notes}</p>
            ) : (
              <p>
                No context has been added yet. This space will become the
                foundation for everything you make for {person.name}.
              </p>
            )}
          </section>

          <section className="person-space-section">
            <span className="people-empty-label">Created</span>

            <p>
              {new Intl.DateTimeFormat("en", {
                dateStyle: "long",
              }).format(new Date(person.created_at))}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
