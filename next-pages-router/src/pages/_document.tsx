import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={` antialiased  flex items-center justify-center min-h-screen  bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900  text-white`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
