import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const handleClick = (evt) => {
    updateFeedback(evt.target.name);
  };
  const renderResetBtn = !!totalFeedback && (
    <button className={styles.button} onClick={resetFeedback}>
      Reset
    </button>
  );

  return (
    <div className={styles.btnWrapper}>
      <button name="good" className={styles.button} onClick={handleClick}>
        Good
      </button>
      <button name="neutral" className={styles.button} onClick={handleClick}>
        Neutral
      </button>
      <button name="bad" className={styles.button} onClick={handleClick}>
        Bad
      </button>
      {renderResetBtn}
    </div>
  );
};

export default Options;
