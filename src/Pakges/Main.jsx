import React from "react";
import MainCard from "./MainCard";
import Container from "../components/Container";

const Main = ({ promise }) => {
  return (
    <div className="min-h-[calc(100vh-284px)]">
      <Container>
        <div className=" md:grid grid-cols-4 gap-5 ">
          {promise.map((data) => (
            <MainCard key={data.id} data={data}></MainCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Main;
