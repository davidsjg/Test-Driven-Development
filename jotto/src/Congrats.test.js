import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { checkPropTypes } from "check-prop-types";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

//function to create a ShallowWrapper for the Congrats component
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ sucess: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

//when suceess = false, we don't want to see any text
test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

//when success = true, we want to congratulate the user, so we want to see some text
test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

//checking props to make sure they are correct type
test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };

  //prop type objet to test, then props you want to test, then tell it we're testing properties('prop'), then name of the component(Component.name)
  checkProps(Congrats, expectedProps);
});
