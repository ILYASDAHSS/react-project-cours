import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";
const Css = () => {
  return (
    <div>
      <Header />
      <Mainpage PageName="This is Css Page" designd="ilyas" />
      <Footer />
    </div>
  );
};

export default Css;
