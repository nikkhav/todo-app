import React, { useState, Fragment } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewTodo = () => {
  // Set username and password to state
  const [todo, setTodo] = useState("");
  const loggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const userId = useSelector((state) => state.currentUser.currentUser);

  // Date and index
  let userIndex = 0;
  let todoIndex = `${userIndex}-${Date.now()}`;

  // Add todo to database
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const sendTodo = (e) => {
    e.preventDefault();
    setTodo("");
    if (todo.length > 0) {
      axios
        .post(
          `https://todo-ap-baadf-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/todos/.json`,
          {
            [todoIndex]: todo,
            date: new Date().toLocaleString(),
          }
        )
        .then((res) => {
          console.log(res);
        });
    } else {
      alert("Please enter a todo");
    }
    console.log(todo);
  };
  const todoForm = (
    <div
      className={
        "container flex flex-col mx-auto bg-white border-2 rounded-xl p-20 mt-40 shadow-lg"
      }
    >
      <label className={"font-extrabold mx-auto mb-10 text-3xl"}>
        Create a new TODO
      </label>
      <form className={"flex flex-row justify-center"}>
        <input
          size={50}
          type={"text"}
          className={"border-2 border-black p-2"}
          placeholder={"Todo"}
          style={{ height: "100px" }}
          value={todo}
          onChange={todoHandler}
        />
        <button
          onClick={sendTodo}
          className={
            "px-16 py-6 rounded-full font-semibold text-sm bg-cyan-300 justify-center"
          }
        >
          Create
        </button>
      </form>
    </div>
  );
  return (
    <Fragment>
      {loggedIn ? (
        todoForm
      ) : (
        <div
          className={
            "container flex flex-col mx-auto bg-white border-2 rounded-xl p-20 mt-40 shadow-lg"
          }
        >
          <h1>Login first</h1>
          <Link to={"/login"}>
            <button className={"rounded-full bg-blue-700 py-3 px-4"}>
              Login
            </button>
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default NewTodo;
