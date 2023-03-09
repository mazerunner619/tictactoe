export default function ShowReaction({
  currClass,
  reaction = "no-reaction 😄",
}) {
  return <div className={currClass}>{reaction}</div>;
}
