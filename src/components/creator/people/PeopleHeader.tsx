type PeopleHeaderProps = {
  actionHref?: string;
};

export function PeopleHeader({
  actionHref = "/workspace/people/new",
}: PeopleHeaderProps) {
  return (
    <div className="people-header">
      <div>
        <p className="eyebrow">People</p>

        <h1>Who are you making something for?</h1>

        <p>
          Start with a person. You can add the memories, messages, interests,
          stories, and photos that make what you create personal.
        </p>
      </div>

      <a className="button button-primary" href={actionHref}>
        Add a person
      </a>
    </div>
  );
}