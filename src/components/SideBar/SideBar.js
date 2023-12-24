import React from "react";

import Product from "./Product";
import "./Style.css";


const SideBar = (props) => {

 

  return (
    <div className={props.sidebar ? "sidebar side-open" : "sidebar"}>
      <Product />
    </div>
  );
};

export default SideBar;
