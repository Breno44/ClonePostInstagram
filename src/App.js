import React from "react";
import { FaEllipsisH, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark, FaRegSmile } from "react-icons/fa";
import "./App.scss";

const App = () => {
  return (
    <section className="section">
      <article className="article">
        <header className="header">
          <div className="flex items-center font-bold">
            <span className="mr-2">
              <img className="rounded-full" src="https://i.pravatar.cc/48" alt="user" />
            </span>
            <span>Breno Henrique</span>
          </div>
          <div>
            <span className="float-right icon-ellipsis">
              <FaEllipsisH />
            </span>
          </div>
        </header>
        <div>
          <img src="https://picsum.photos/500" alt="user" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <FaRegHeart className="icon" />
              <FaRegComment className="icon" />
              <FaRegPaperPlane className="icon" />
            </div>
            <div>
              <FaRegBookmark className="text-2xl" />
            </div>
          </div>
          <div className="font-bold">35,546 likes</div>
          <div>
            <a href="" className="text-gray-400">
              View all 100 comments
            </a>
          </div>
          <div>
            <div>
              <span className="font-bold">unknownuser</span>
              <span>
                t is a long established fact that a reader will be distracted by the readable content of a page when
              </span>
            </div>
            <div>
              <span className="font-bold">unknownuser</span>
              <span>
                t is a long established fact that a reader will be distracted by the readable content of a page when
              </span>
            </div>
          </div>
          <small className="text-gray-400">2 HOURS AGO</small>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer">
                <img className="rounded-full" src="https://i.pravatar.cc/48" alt="user" />
              </span>

              <input
                type="text"
                name=""
                id=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <button className="px-3 py-2 text-purple-900 bg-gray-200 focus:bg-gray-300">Post</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default App;
