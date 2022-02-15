import React, { useState, useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import Reducer from "./../reducers";

import reducer, { initialState } from "../reducers";

import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  memoryOperation,
  clearMemory,
} from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick = () => {
  //   dispatch(addOne());
  // };

  const handleClickNumber = (number) => {
    dispatch(applyNumber(number));
  };

  const handleChangeOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleAddMemory = () => {
    dispatch(addMemory());
  };

  const handleMemoryOperation = () => {
    dispatch(memoryOperation());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAddMemory()} value={"M+"} />
              <CalcButton
                onClick={() => handleMemoryOperation()}
                value={"MR"}
              />
              <CalcButton onClick={() => handleClearMemory()} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickNumber(1)} value={1} />
              <CalcButton onClick={() => handleClickNumber(2)} value={2} />
              <CalcButton onClick={() => handleClickNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickNumber(4)} value={4} />
              <CalcButton onClick={() => handleClickNumber(5)} value={5} />
              <CalcButton onClick={() => handleClickNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickNumber(7)} value={7} />
              <CalcButton onClick={() => handleClickNumber(8)} value={8} />
              <CalcButton onClick={() => handleClickNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => handleChangeOperation("+")}
                value={"+"}
              />
              <CalcButton
                onClick={() => handleChangeOperation("*")}
                value={"*"}
              />
              <CalcButton
                onClick={() => handleChangeOperation("-")}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClearDisplay()} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
