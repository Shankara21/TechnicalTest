import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { IPost } from "@/types/post";

interface PostCardProps {
  post: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div
      key={post.id}
      className="p-3 bg-white bg-opacity-15 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <Link href={`/posts/${post.id}`}>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <Separator />
        <p>{post.body}</p>
      </Link>
    </div>
  );
};

export default PostCard;
