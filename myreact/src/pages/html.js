import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";
import { HeadProvider, Title, Meta } from "react-head";  // ✅ import from react-head

const Html = () => {
  return (
    <HeadProvider>
      {/* 🧠 Everything inside HeadProvider can use <Title> or <Meta> */}
      <Title>HTML Page | MyReact App</Title>
      <Meta name="description" content="This is the HTML Page created by Ilyas" />
      <div>
        <Header />
        <Mainpage PageName="This is Html Page" designd="ilyas" />
        <Footer />
      </div>
    </HeadProvider>
  );
};

export default Html;
