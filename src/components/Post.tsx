import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export const Post = () => {
  return (
    <article className="bg-gray-800 rounded-lg p-10 ">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src="https://github.com/joaogdoqr.png" alt="author profile" />
          <div className="">
            <strong className="block text-gray-100 leading-[1.6rem]">
              Tux
            </strong>
            <span className="block text-gray-400 text-sm leading-[1.6rem]">
              Web Developer
            </span>
          </div>
        </div>
        <time
          className="text-sm text-gray-400"
          title="11 may at 08:13"
          dateTime="2022-05-11 08:13:00"
        >
          Published at 1h ago
        </time>
      </header>

      <div className="leading-[1.6rem] text-gray-300 mt-6 [&>p]:mt-4 [&>p>a]:font-bold [&>p>a]:text-green-500 [&>p>a]:no-underline">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#" className="hover:text-green-300">
            jane.design/doctorcare
          </a>
        </p>
        <p className="space-x-2">
          <a href="#" className="hover:text-green-300">
            #novoprojeto
          </a>
          <a href="#" className="hover:text-green-300">
            #nlw
          </a>
          <a href="#" className="hover:text-green-300">
            #rocketseat
          </a>
        </p>
      </div>

      <form className="w-full mt-6 pt-6 border-t border-gray-600 ">
        <strong className="leading-[1.6rem] text-gray-100">
          Give your feedback
        </strong>
        <textarea
          className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-lg text-gray-100 leading-[1.4rem] mt-4"
          placeholder="Your feedback"
        />

        <button
          className="px-6 py-4 mt-4 rounded-lg border-none bg-green-600 text-white font-bold cursor-pointer hover:bg-green-500 transition-colors duration-100"
          type="submit"
        >
          Comment
        </button>

        <div className="">
          <Comment />
        </div>
      </form>
    </article>
  );
};
