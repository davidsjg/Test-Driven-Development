import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

/**
 * setup function for app component
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});
