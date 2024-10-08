import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { IPost } from "@/types/post";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

interface postProps {
  posts: IPost[];
}
const PostCard = dynamic(() => import("../../components/PostCard"));

export const getStaticProps: GetStaticProps<postProps> = async () => {
  const res = await axiosInstance.get("/posts");
  const posts: IPost[] = res.data;

  return {
    props: {
      posts,
    },
  };
};

const PostPage: React.FC<postProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>List post</title>
      </Head>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-5xl font-semibold">List of posts</h1>
          <Button asChild variant={"outline"}>
            <Link href="/posts/create">Create new data</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostPage;
