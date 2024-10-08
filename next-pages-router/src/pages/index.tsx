import Link from "next/link";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  return (
    <div className={`${montserrat.className} w-3/4`}>
      <h1 className="text-4xl font-bold mb-4">Welcome to the 3rd Test</h1>
      <p className="text-lg  text-gray-400 font-medium mb-6 ">
        Thank you for reviewing this Next.js project. This page serves as the
        starting point for the third test. Your feedback and suggestions will be
        highly appreciated.
      </p>
      <Link
        href="/posts"
        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium  border-2 border-white rounded-full text-white hover:text-black group "
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative">Go to posts</span>
      </Link>
    </div>
  );
}
