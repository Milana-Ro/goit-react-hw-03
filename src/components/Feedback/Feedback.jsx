import styles from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedbackTypes;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback || 0}%</li>
    </ul>
  );
};

export default Feedback;
