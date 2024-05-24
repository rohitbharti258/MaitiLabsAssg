import React from "react";
import TopHeading from "../components/TopHeading";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Content from "../components/Content";

const Home = () => {
  return (
    <div>
      <TopHeading />
      <Navbar />
      <Main />
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Home;
