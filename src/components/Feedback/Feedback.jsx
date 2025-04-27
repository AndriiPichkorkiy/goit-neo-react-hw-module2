import css from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bed: {bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
}
