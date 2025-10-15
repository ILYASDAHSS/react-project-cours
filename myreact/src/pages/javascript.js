import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";
import { HeadProvider, Title, Meta } from "react-head"; // ✅ import from react-head
const Javascript = () => {
  return (
    <div>
      <HeadProvider>
        {/* 🧠 Everything inside HeadProvider can use <Title> or <Meta> */}
        <Title>Javascript Page | MyReact App</Title>
        <Meta
          name="description"
          content="This is the Javascript Page created by Ilyas"
        />
        <Header />
        <Mainpage PageName="This is Javascript Page" designd="ilyas" />
        <Footer />
      </HeadProvider>
    </div>
  );
};

export default Javascript;
