import React from "react";

const Register = () => {
  return (
    <div
      className={
        "container mx-auto mt-16 border-2 border-black rounded-lg p-4 bg-white"
      }
    >
      <div className="grid grid-cols-2">
        <form className={"flex flex-row justify-center"}>
          <input
            placeholder="username"
            className={"border-2 border-black mr-1"}
          />
          <input placeholder="password" className={"border-2 border-black"} />
        </form>
        <div className={"flex flex-row justify-center"}>
          <button
            className={
              " px-6 py-2 rounded-full font-semibold text-sm bg-cyan-300"
            }
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
