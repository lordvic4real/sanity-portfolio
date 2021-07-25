import React from "react";
import VicBg from "../image/me3.jpeg";

export default function Home() {
  return (
    <>
      <main>
        <img
          src={VicBg}
          alt="my bg"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center pt-12 lg:pt-64 px-8 min-h-screen">
          <h1 className="text-6xl font-bold text-green-200 leading-none cursive lg:leading-snug home-name">
            Aloha. I'm Victor Ugbede David
          </h1>
        </section>
      </main>
    </>
  );
}
