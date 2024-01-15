import React from "react";
import Navigation from "./Navigation";
import Body from "./Body";
import Search from "./Search";
import GoogleOffered from "./GoogleOffered";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Body />
      <Search />
      <GoogleOffered />
      <Footer />
    </>
  );
};

export default Home;
