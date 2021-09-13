import React from "react";
import { FaEllipsisH, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";
import "./App.scss";

const App = () => {
  return (
    <section className="section">
      <article className="article">
        <header className="header">
          <div className="flex items-center font-bold">
            <span className="mr-2">
              <img src="https://i.pravatar.cc/48" alt="user" />
            </span>
            <span>Breno Henrique</span>
          </div>
          <div>
            <span className="float-right">
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
        </div>
      </article>
    </section>
  );
};

export default App;
