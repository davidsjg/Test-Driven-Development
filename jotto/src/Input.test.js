import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, "component-input");
  expect(input.length).toBe(1);
});

//checking props to make sure they are the correct type
test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  //create a function we can watch for setCurrentGuess
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    //create a function we can watch for setCurrentGuess
    //clearing mockSetCurrentGuess will reset everything within this describe
    mockSetCurrentGuess.mockClear();

    //taking whatever useState was before we overwrite it, and storing it in OG useState
    originalUseState = React.useState;
    //replace useState with a mock
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  //restore original useState.  Any other describes that come after this will use OG useState
  afterEach(() => {
    React.useState = originalUseState;
  });
  //goal is to check that setCurrentGuess gets called with the correct argument whenever there's a change to the input field
  test("state updates with value of input box upon change", () => {
    //create a function we can watch for setCurrentGuess
    // const mockSetCurrentGuess = jest.fn();
    //replace useState with a mock
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    //below we are simulating input box getting a value of train
    //in order to simulate input into that input box, we make a mock event and then apply that as the onChange event to the input box
    const mockEvent = { target: { value: "train" } };
    //apply the event to a change simulation on the input box
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("state updates with value of input box upon submit button click", () => {
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    // const inputBox = findByTestAttr(wrapper, "input-box");
    const submitButton = findByTestAttr(wrapper, "submit-button");

    //give it an event, which is preventDefault
    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
