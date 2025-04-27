import css from "./Options.module.css";

export default function Options({ voteHandler, totalFeedback, resetHandler }) {
  return (
    <ul className={css["options-list"]}>
      <li>
        <button
          className={css["btn-option"]}
          type="button"
          onClick={() => {
            voteHandler("good");
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css["btn-option"]}
          type="button"
          onClick={() => {
            voteHandler("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css["btn-option"]}
          type="button"
          onClick={() => {
            voteHandler("bad");
          }}
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button
            className={css["btn-reset"]}
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
