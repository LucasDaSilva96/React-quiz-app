import { useQuiz } from "./context/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, i) => {
        return (
          <button
            key={option}
            disabled={hasAnswered}
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === questions[index].correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
