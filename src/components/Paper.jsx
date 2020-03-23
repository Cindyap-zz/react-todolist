import React from "react";
import PropTypes from "prop-types";

const Paper = ({ childern }) => {
  return (
    <div className="container">
      <div className="frame">{childern}</div>
    </div>
  );
};

Paper.propTypes = {
  childern: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
