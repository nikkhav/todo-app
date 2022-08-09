import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      className={"flex flex-col justify-items-start items-center"}
      style={{ height: "100vh" }}
    >
      <h2
        className={"font-extrabold text-5xl mt-16 italic font-extrabold"}
        style={{ color: "white" }}
      >
        Welcome to Nikita's TODO App 🎉
      </h2>
      <div className={"flex flex-row justify-items-center items-center mt-6"}>
        <Link
          to={"login"}
          className={"rounded-full bg-green-300 py-2 px-4 mr-4"}
        >
          Log in
        </Link>
        <Link to={"register"} className={"rounded-full bg-white py-2 px-4"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
