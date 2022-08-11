import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { currentUserActions } from "../store/currentUserSlice";

const Register = () => {
  // Set username and password to state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const dispatch = useDispatch();

  // Handle username and password
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
    if (usernameIsValid && passwordIsValid) {
      setUsername("");
      setPassword("");
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
          console.log(res.data);
          dispatch(currentUserActions.setCurrentUser(res.data.name));
          dispatch(currentUserActions.setUsername(username));
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
            value={username}
            onChange={setUsernameHandler}
            placeholder="username"
            className={"border-2 border-black mr-1"}
          />
          <input
            type={password}
            onChange={setPasswordHandler}
            value={password}
            placeholder="password"
            className={"border-2 border-black"}
          />
        </form>
        <div className={"flex flex-row justify-center"}>
          <button
            onClick={validateForm}
            type={"submit"}
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
