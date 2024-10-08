import { IPost } from "@/types/post";
import React from "react";
import { Separator } from "./ui/separator";

interface DetailPostProps {
  post: IPost;
}

const DetailPost: React.FC<DetailPostProps> = ({ post }) => {
  return (
    <div className="space-y-4 mb-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <Separator />
      <p>{post.body}</p>
    </div>
  );
};

export default DetailPost;
