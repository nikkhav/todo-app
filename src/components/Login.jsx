import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  // Set username and password to state
  const setUsernameHandler = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length > 4) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 6) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  // Check if username and password are valid
  const validateForm = () => {
    console.log(usernameIsValid, passwordIsValid);
    if (usernameIsValid && passwordIsValid) {
      console.log("Form is valid");
      axios
        .post(
          "https://todo-ap-baadf-default-rtdb.europe-west1.firebasedatabase.app/users/.json",
          {
            username: username,
            password: password,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div
      className={
        "container mx-auto mt-16 border-2 border-black rounded-lg p-4 bg-white"
      }
    >
      <div className="grid grid-cols-2">
        <form className={"flex flex-row justify-center"}>
          <input
            type={username}
            onChange={setUsernameHandler}
            placeholder="username"
            className={"border-2 border-black mr-1"}
            value={username}
          />
          <input
            type={password}
            onChange={setPasswordHandler}
            placeholder="password"
            className={"border-2 border-black"}
            value={password}
          />
        </form>
        <div className={"flex flex-row justify-center"}>
          <button
            type={"submit"}
            onClick={validateForm}
            className={
              " px-6 py-2 rounded-full font-semibold text-sm bg-cyan-300"
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
