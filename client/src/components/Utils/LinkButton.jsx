import React from "react";
import { Link } from "react-router-dom";
function LinkButton({ path, title, reqClass }) {
  return (
    <Link to={path} className={reqClass}>
      {title}
    </Link>
  );
}

export default LinkButton;
