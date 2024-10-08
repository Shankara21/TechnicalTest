import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";
import ValidationForm from "./components/ValidationForm";
import { Plus } from "lucide-react";
import TodoList from "./components/TodoList";
import CreateTodoList from "./components/CreateTodoList";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="todo" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="todo">Todo List</TabsTrigger>
          <TabsTrigger value="form">Form</TabsTrigger>
        </TabsList>
        <TabsContent value="todo">
          <Card>
            <CardHeader>
              <CardTitle>Todo List</CardTitle>
              <CardDescription>
                Organize your tasks and mark them as done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <TodoList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>Validation Form</CardTitle>
              <CardDescription>
                Enter your details and confirm to proceed.
              </CardDescription>
            </CardHeader>
            <ValidationForm />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
