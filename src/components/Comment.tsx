import { ThumbsUp, Trash } from "lucide-react";
import { Avatar } from "./Avatar";

export const Comment = () => {
  return (
    <div className="flex flex-col mt-6 md:flex-row gap-4">
      <Avatar
        hasBorder={false}
        src="https://github.com/joaogdoqr.png"
        alt="comment author profile"
      />
      <div className="flex-1 mt-4 md:mt-0">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-[1.6rem]">Tux</strong>
              <time
                className="text-[0.75rem] leading-[1.6rem] text-gray-400"
                title="11 may at 08:13"
                dateTime="2022-05-11 08:13:00"
              >
                Published at 1h ago
              </time>
            </div>

            <button
              className="mt-4 bg-transparent border-none text-gray-400 hover:text-red-500 transition-colors duration-100"
              title="Delete comment"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">Excelent!!</p>
        </div>

        <footer className="mt-4">
          <button className="flex items-center space-x-2 hover:text-green-300">
            <ThumbsUp />
            <span>Like</span>
            <span>&bull;</span>
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
