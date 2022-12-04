import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const ApiResponse = () => {
  const [todo, setTodo] = useState<Todo>();
  const onClickButton = async () => {
    const response = await axios.get<Todo>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setTodo(response.data);
  };
  return (
    <>
      <Button onClick={onClickButton}>データ取得</Button>
      {todo && (
        <ul>
          <li>userId: {todo.userId}</li>
          <li>id: {todo.id}</li>
          <li>title: {todo.title}</li>
          <li>completed: {todo.completed ? "true" : "false"}</li>
        </ul>
      )}
    </>
  );
};
