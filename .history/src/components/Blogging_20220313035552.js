import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logo from "./logo.jpeg";
function Blogging() {
  const [markdown, setMarkdown] = useState("# markdown preview");

  return (
    <div>
      <div className="items-center pl-56 ml-80">
        <div className="h-13 ">
          <img classname="items-center" src={logo} />
        </div>
      </div>
      

      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[384px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
          <div className="w-full h-[550px] hidden md:block">
            <section className="markdown">
            <textarea
                className="h-10 w-96"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              ></textarea>
              <textarea
                className="h-96 w-96"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              ></textarea>
            </section>
          </div>
          <div className="pt-0 flex flex-col justify-around">
          <article className="h-96 whitespace-normal">
              <ReactMarkdown>{markdown}</ReactMarkdown>
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
