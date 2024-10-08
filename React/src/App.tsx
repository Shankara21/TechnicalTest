import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TodoList from "./components/TodoList";
import ValidationForm from "./components/ValidationForm";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
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
