import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logo from "./logo.jpeg";
function Blogging() {
  const [title, setTitle] = useState("# title");
  const [markdown, setMarkdown] = useState("# markdown preview");

  return (
    <div>
      <div className="items-center pl-56 ml-80">
        <div className="h-13 ">
          <img classname="items-center" src={logo} />
        </div>
      </div>
      <div className="text-center pr-20 text-4xl italic">
        {" "}
        Start writing Your Blog
      </div>
      <hr />
      <hr />
      <hr />
      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[384px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
          <div className="w-full h-[550px] hidden md:block">
            <section className="markdown">
              <textarea
                className="h-14 w-96"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <textarea
                className="h-80 w-96"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              ></textarea>
               <button className="py-2 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white border-r-2"> Post It</button>
            </section>
          </div>
          <div className="pt-0 flex flex-col justify-around">
            <article className="h-10 whitespace-normal">
              <ReactMarkdown>{title}</ReactMarkdown>
            </article>
            <article className="h-96 whitespace-normal">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogging;
