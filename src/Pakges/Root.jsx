import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Main from "./Main";
import { BeatLoader } from "react-spinners";

const Root = () => {
  const navgation = useNavigation();
  const promise = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {navgation.state==='loading'?<div className="flex justify-center items-center mt-5"><BeatLoader color={'red'}></BeatLoader></div>:(
         <Main promise={promise.plants}></Main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
