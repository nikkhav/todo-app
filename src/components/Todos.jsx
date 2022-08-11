import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoDates, setTodoDates] = useState([]);
  // TEST
  //const userId = "-N938oxnuvP1_hAlLYBG";
  const userId = useSelector((state) => state.currentUser.currentUser);
  // END TEST

  const getData = async () => {
    const response = await axios.get(
      "https://todo-ap-baadf-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
    const data = await response.data;
    const todosArr = Object.values(data.users[userId].todos);
    todosArr.map((element) => {
      const [todo, date] = Object.values(element);
      setTodos((prev) => [...prev, todo]);
      setTodoDates((prev) => [...prev, date]);
    });
  };

  useEffect(() => {
    getData().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className={"container mx-auto bg-white border-2 rounded-xl p-8 mt-6"}>
      {todos.map((todo, index) => {
        return (
          <div
            className={
              "flex flex-col border-solid border-2 border-cyan-400 bg-blue-200 pb-6 mt-4 rounded-full shadow-lg"
            }
            key={index}
          >
            <p className={"text-xl font-thin text-center"}>{todo}</p>
            <p>{todoDates[index]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
