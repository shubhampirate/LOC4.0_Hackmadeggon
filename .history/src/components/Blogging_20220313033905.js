import {React,useState} from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import logo from "./logo.jpeg";
function Blogging() {
    const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <div>
      <div className="items-center pl-56 ml-80">
        <div className="h-13 ">
          <img classname="items-center" src={logo} />
        </div>
      </div>
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
          <h1 className="text-center"> Start writing a BLOG</h1>
          <div className="p-4 flex flex-col justify-around">
            <form>
              <div></div>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Blogging;
