import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2"

const BaseLayout = (props) => {
  return (
    <>
      <Header2 />
      {/* <Footer /> */}
      {props.children}

      <br />
      <br />
     
    </>
  );
};

export default BaseLayout;
