import Options from "./Options";
import { useQuiz } from "./context/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options></Options>
    </div>
  );
}

export default Question;
