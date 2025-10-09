import Header from "../comp/header";
import React from "react";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";
const Html = () => {
  return (
    <div>
      <Header />
      <Mainpage PageName="This is Html Page" designd="ilyas" />
      <Footer />
    </div>
  );
};

export default Html;
