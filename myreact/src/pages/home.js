import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";


const Home = () => {
  return (
    <>
      <Header />
      <Mainpage PageName="This is Home Page" designd="ilyas" />
      <Footer />
    </>
  );
};

export default Home;
