import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

//set enzyme up by configuring adapter we imported
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  //need to be more specific by using a data-test attribute on a component and using expect statement to throw error
  //add data-test attribute to the top level component
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("counter display starts at 0", () => {});

test("clicking button increments counter display", () => {});
