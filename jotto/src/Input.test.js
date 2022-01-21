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
  //goal is to check that setCurrentGuess gets called with the correct argument whenever there's a change to the input field
  test("state updates with value of input box upon change", () => {
    //create a function we can watch for setCurrentGuess
    const mockSetCurrentGuess = jest.fn();
    //replace useState with a mock
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    //below we are simulating input box getting a value of train
    //in order to simulate input into that input box, we make a mock event and then apply that as the onChange event to the input box
    const mockEvent = { target: { value: "train" } };
    //apply the event to a change simulation on the input box
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
