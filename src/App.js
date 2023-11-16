import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err.message);
      }
    }
    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header></Header>

      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}
