import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

//propType test and setup function
//in general, we start out with the above when we start tests for new componenet

//give it some props we expect to be good
const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  //checking to see that no error is thrown when we give that component those props
  //want to make sure that the defaultProps that we think are going to pass the test for this component actually pass the test
  //this is a negative test. checking to see that no error is thrown.  if no props are defined for this component, then no error thrown
  checkProps(GuessedWords, defaultProps);
});
