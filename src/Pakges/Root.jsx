import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../components/Footer";
import Main from "./Main";


const Root = () => {
const promise = useLoaderData()
// console.log(promise)
  return (
    <div>
      {/* Nav bar code Navbar.jsx */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Main promise={promise.plants}></Main>
        {/* Nav bar code Main.jsx */}
      <Footer></Footer>
        {/* Nav bar code Footer.jsx */}
    </div>
  );
};

export default Root;
