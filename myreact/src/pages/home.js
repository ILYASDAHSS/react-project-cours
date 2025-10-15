import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Mainpage from "../comp/Mainpage";
import { HeadProvider, Title, Meta } from "react-head"; // ✅ import from react-head

const Home = () => {
  return (
    <>
      <HeadProvider>
        <Title>Home Page | MyReact App</Title>
        <Meta
          name="description"
          content="This is the Home Page created by Ilyas"
        />
        <Header />
        <Mainpage PageName="This is Home Page" designd="ilyas" />
        <Footer />
      </HeadProvider>
    </>
  );
};

export default Home;
