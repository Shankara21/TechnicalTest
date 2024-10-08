import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "title cannot be empty",
  }),
  body: z.string().min(1, {
    message: "body cannot be empty",
  }),
});
interface createPostProps {}

const CreatePost: React.FC<createPostProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Post created successfully");
        console.log("Post created successfully:", result);
        setIsLoading(false);
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  return (
    <div className="p-6 bg-white  rounded-lg w-[30vw] text-black">
      <h1 className="text-2xl font-bold text-black">Create Post</h1>
      <Form {...form}>
        <FormDescription className="mb-3">
          Create a new post with the given title and body.
        </FormDescription>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Textarea placeholder="Body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePost;
