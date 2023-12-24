import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.closeSidebar}
      className={props.sidebar ? "backdrop backdrop-open" : "backdrop"}
    ></div>
  );
};

export default Backdrop;
