import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import VicBg from "../image/me3.jpeg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
     name,
     bio,
     "authorImage": image.asset->url
   }`
      )
      .then((data) => setAthor(data))
      .catch(console.error);
  }, []);
  if (!author) return <div>Loading....</div>;
  return (
    <>
      <main className="relative">
        <img src={VicBg} alt="abt bg" className="absolute w-full" />
        <div className="p-10 lg:48 container mx-auto relative">
          <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 ">
            <img
              src={urlFor(author.authorImage).url()}
              alt="my-pix"
              className="w-32 h-32"
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-6xl text-green-600 mb-4">
                hey there i am{" "}
                <span className="text-green-100">{author.name}</span>
              </h1>
              <div className="prose lg:prose-xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="gco5q2a4"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
