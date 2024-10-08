import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import CreateTodoList from "./CreateTodoList";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto ">
      <div className="flex justify-end mb-4">
        <CreateTodoList onAddTodo={handleAddTodo} />
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center p-3 space-x-2 border rounded-lg shadow bg-card"
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => handleToggleComplete(todo.id)}
            />
            <span
              className={`flex-grow ${
                todo.completed ? "line-through text-muted-foreground" : ""
              }`}
            >
              {todo.text}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
