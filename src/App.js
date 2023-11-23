import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import FooterComponent from "./components/FooterComponent";
import Timer from "./components/Timer";
import { useQuiz } from "./components/context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header></Header>

      <Main>
        {status === "loading" && <Loader></Loader>}
        {status === "error" && <Error></Error>}
        {status === "ready" && <StartScreen></StartScreen>}
        {status === "active" && (
          <React.Fragment>
            <Progress></Progress>

            <Question></Question>
            <FooterComponent>
              <Timer></Timer>
              <NextButton></NextButton>
            </FooterComponent>
          </React.Fragment>
        )}

        {status === "finished" && <FinishScreen></FinishScreen>}
      </Main>
    </div>
  );
}
