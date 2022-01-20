//receive success state as prop, render if true or null if false
import React from "react";

/**
 * @function
 * @param {object} param - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' = false)
 */

export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
