import React, { useState } from "react";
import axios from "axios";

const NewTodo = () => {
  // Set username and password to state
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState("");

  // Date and index
  let userIndex = 0;
  let todoIndex = `${userIndex}-${Date.now()}`;

  // Find user id
  const findUser = async () => {
    const res = await axios.get(
      "https://todo-ap-baadf-default-rtdb.europe-west1.firebasedatabase.app/users/.json"
    );
    const data = await res.data;
    const users = Object.values(data);
    const usersIds = Object.keys(data);

    const findIndexUser = users.map((user, index) => {
      if (user.username === "nikkhav") {
        userIndex = index;
        return user;
      } else {
        return null;
      }
    });
    setUserId(usersIds[userIndex]);
  };

  findUser();

  // Add todo to database
  const todoHandler = (e) => {
    if (e.target.value.length > 0) {
      setTodo(e.target.value);
    } else alert("Please enter a todo");
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
    }
    console.log(todo);
  };
  return (
    <div
      className={
        "container flex flex-col mx-auto bg-white border-2 rounded-xl p-20 mt-40 shadow-lg"
      }
    >
      <h2>Current user is {userId}</h2>
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
};

export default NewTodo;
