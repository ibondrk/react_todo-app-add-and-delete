import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const postTodos = (
  userId: number,
  title: string,
) => {
  return client.post<Todo>('/todos', {
    title,
    userId,
    completed: false,
  });
};

export const removeTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};
