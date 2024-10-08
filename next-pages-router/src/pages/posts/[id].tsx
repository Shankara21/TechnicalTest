import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { IPost } from "@/types/post";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import DetailPost from "@/components/DetailPost";
interface detailProps {
  post: IPost;
}
const cache: Record<number, IPost> = {};
export const getServerSideProps: GetServerSideProps<detailProps> = async (
  context
) => {
  const { id } = context.params!;
  const postId = parseInt(id as string);

  if (cache[postId]) {
    return {
      props: {
        post: cache[postId],
      },
    };
  }

  try {
    const res = await axiosInstance.get(`/posts/${id}`);
    const post: IPost = res.data;
    cache[postId] = post;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const DetailProps: React.FC<detailProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Detail {post.title}</title>
      </Head>
      <div className="flex justify-center flex-col items-center w-3/4 mx-auto bg-white p-3 rounded-lg bg-opacity-15">
        <DetailPost post={post} />
        <Button onClick={() => router.back()} variant={"outline"}>
          <span>
            <ChevronLeft />
          </span>{" "}
          Back
        </Button>
      </div>
    </>
  );
};

export default DetailProps;
