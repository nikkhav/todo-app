import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div
      className={"flex flex-row bg-white m-0 p-0"}
      style={{ height: "3.5rem" }}
    >
      <div
        className={"flex flex-row flex-1 justify-between items-center ml-10"}
      >
        <nav className={"subpixel-antialiased tracking-wide font-mono"}>
          <NavLink to={"/"}>TODO from Nikita</NavLink>
          {/*testing data*/}
          <p className={"justify-center"}>
            {" "}
            {currentUser.isLoggedIn
              ? `Welcome ${currentUser.username}`
              : "Not logged in"}
            {/*Current user is {currentUser.currentUser} / {currentUser.username}*/}
          </p>
          {/*end testing data*/}
        </nav>
      </div>
      <div className={"flex flex-row flex-none justify-end items-center pr-10"}>
        <NavLink to={"create"}> Create a new TODO </NavLink>
      </div>
      <div className={"flex flex-row flex-none justify-end items-center pr-10"}>
        <NavLink to={"todos"}> See all TODOs </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
