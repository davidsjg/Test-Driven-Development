import App from "./App";
//shallow wrapper renders the parent component and just uses placeholders for the children (instead of deep - renders children as well)
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

//configure enzyme with object that specifies an adapter and the adapter will be an instance of the enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

//name of the test, second is anonymous function it runs, if any errors thrown, failed test
test("renders non-empty component without crashing", () => {
  //shallow returns a shallow wrapper
  const wrapper = shallow(<App />);
  //debug is enzyme method, returns an HTML-like string of the wrapper for debugging purposes
  console.log(wrapper.debug());
  //assertions in JEST start with the gloabl 'expect', then subject of assertion, then matcher
  //'to' matchers make it very clear what you are testing on
  //wrapper.exists() tests whether or not any nodes exist in the wrapper.  If no nodes exist, then the wrapper is empty
  //takes the wrapper which is output of shallow, and makes sure that it is non-empty
  expect(wrapper.exists()).toBe(true);
});

//need to configure enzyme to use the adapter that we want
//adapter is telling enzyme what kind of code to expect

//WRAPPER
//looking at the wrapper can give more insight as to what is being rendered
//used when you're not sure what is going on and want to see what is being rendered

//JEST ASSERTIONS
//a way to set expectations and fail the test if those expectations aren't met
//job of the assertion is to set up an expectation, what we expect the outome of the test to be
//expectation fails, assertion will throw an error and fail the test
