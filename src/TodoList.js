import React from 'react'
import Todo from './Todo';

const TodoList/*Listなので一つのTodoが入っている箱*/ = ({todos, toggleTodo }) => {
  return todos.map((todo) => (
  <Todo todo = {todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
}

export default/*←どのファイルでも使えるようにする*/ TodoList;