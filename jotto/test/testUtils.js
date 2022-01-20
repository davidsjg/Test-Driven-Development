import checkPropTypes from "check-prop-types";

/**
 *
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

//take some expected props and see whether or not they would throw a warning
//props testing strategy is to give it some props we expect to be good, and make sure they don't throw a warning
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
