import { useReducer } from "react";
import DigitBtn from "./DigitsBtn";
import OperationBtn from "./OperationBtn";
import "./App.css";
import "./index.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
//state,actions
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (
        payload.digit === "0" &&
        state.currentOperand === "0"
      )
        return state;
      if (
        payload.digit === "." &&
        state.currentOperand.includes(".")
      )
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${
          payload.digit
        }`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (
        state.currentOperand == null &&
        state.previousOperand == null
      )
        return state;

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evauate(state),
      };
  }
}

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "×":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}
function App() {
  const initialState = {
    currentOperand: "",
    previousOperand: "",
    operation: "",
  };
  //value, dispatch---(function,initial value )
  const [
    { currentOperand, previousOperand, operation },
    dispatch,
  ] = useReducer(reducer, { initialState });

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">
            {currentOperand}
          </div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button>DEL</button>
        <OperationBtn operation="÷" dispatch={dispatch} />
        <DigitBtn digit="1" dispatch={dispatch} />
        <DigitBtn digit="2" dispatch={dispatch} />
        <DigitBtn digit="3" dispatch={dispatch} />

        <OperationBtn operation="×" dispatch={dispatch} />

        <DigitBtn digit="4" dispatch={dispatch} />
        <DigitBtn digit="5" dispatch={dispatch} />
        <DigitBtn digit="6" dispatch={dispatch} />
        <OperationBtn operation="+" dispatch={dispatch} />
        <DigitBtn digit="7" dispatch={dispatch} />
        <DigitBtn digit="8" dispatch={dispatch} />
        <DigitBtn digit="9" dispatch={dispatch} />
        <OperationBtn operation="-" dispatch={dispatch} />
        <DigitBtn digit="0" dispatch={dispatch} />
        <DigitBtn digit="." dispatch={dispatch} />
        <button
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          className="span-two"
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
