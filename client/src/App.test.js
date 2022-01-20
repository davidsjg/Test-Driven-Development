import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

//set enzyme up by configuring adapter we imported
Enzyme.configure({ adapter: new EnzymeAdapter() });

//JS dock, way of commmenting function that shows what they are and how they are inteded to be used
/**
 * factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  //need to be more specific by using a data-test attribute on a component and using expect statement to throw error
  //add data-test attribute to the top level component
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

//
test("counter display starts at 0", () => {
  //creates a shallow wrapper from our App component
  const wrapper = setup();
  //not searching for the node for the count variable, but rather the text from that node
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("clicking increment button increments counter display", () => {
  const wrapper = setup();
  //find the button
  const button = findByTestAttr(wrapper, "increment-button");

  //click the button
  button.simulate("click");

  //find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

describe("decrement button", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const decButton = findByTestAttr(wrapper, "decrement-button");
  });

  test("clicking decrement button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();

    const incButton = findByTestAttr(wrapper, "increment-button");

    //click increment so count greater than 0
    incButton.simulate("click");

    const decButton = findByTestAttr(wrapper, "decrement-button");

    //click decrement button so count back to 0
    decButton.simulate("click");

    const count = findByTestAttr(wrapper, "count").text();

    //test value
    expect(count).toBe("0");
  });
});

describe("error when counter goes below zero", () => {
  test("error does not show when not needed", () => {
    const wrapper = setup();

    const errorDiv = findByTestAttr(wrapper, "error-message");

    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});

describe("counter is 0 and decrement is clicked", () => {
  //scoping wrapper to the describe, so it can be used in beforeEach and the tests
  let wrapper;
  beforeEach(() => {
    wrapper = setup();

    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });
  test("error shows", () => {
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });
  test("counter still displays 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
  test("clicking increment clears the error", () => {
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");

    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});
