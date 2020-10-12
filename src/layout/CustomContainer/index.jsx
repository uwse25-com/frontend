import React from "react";
import "./styles.scss";

const CustomContainer = ({ children, horizontalPadding, verticalPadding }) => {
  return <div className="custom-container-wrap">{children}</div>;
};
/*Note: Add prop/default props for horizontal/vertical padding handling*/

CustomContainer.defaultProps = {
  horizontalPadding: true,
  verticalPadding: true,
};
export default CustomContainer;
