import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { z } from 'zod';

// type TodoResponse = {
//   userId: string;
//   id: boolean;
//   title: number;
//   completed: number;
// };

const TodoSchema = z.object({
  userId: z.string(),
  id: z.boolean(),
  title: z.number(),
  completed: z.number(),
});

type TodoResponse = z.infer<typeof TodoSchema>;

export const ApiResponse = () => {
  const [todo, setTodo] = useState<TodoResponse>();
  const onClickButton = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    try {
      const data = TodoSchema.parse(response.data);
      setTodo(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Button onClick={onClickButton}>データ取得</Button>
      {todo && (
        <ul>
          {/* 👇本当はnumberなのにtoUpperCaseが使える */}
          <li>userId: {todo.userId.toUpperCase()}</li>
          <li>id: {todo.id}</li>
          <li>title: {todo.title}</li>
          {/* 👇本当はbooleanなのにtoFixedが使える */}
          <li>completed: {todo.completed.toFixed(2) ? 'true' : 'false'}</li>
        </ul>
      )}
    </>
  );
};

/**
 * response.data : {
 *  userId: number;
 *  id: number;
 *  title: string;
 *  completed: boolean;
 * }
 */
