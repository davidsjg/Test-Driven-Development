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

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
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

test("renders decrement button", () => {
  //create a shallow wrapper from our App component
  const wrapper = setup();

  //find decrement button
  const decButton = findByTestAttr(wrapper, "decrement-button");

  //expect there to be 1 decrement button
  expect(decButton.length).toBe(1);
});

test("clicking decrement button decrements counter display", () => {
  //create a shallow wrapper from our App component
  const wrapper = setup();

  const decButton = findByTestAttr(wrapper, "decrement-button");

  //simulate button click
  decButton.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("-1");
});
