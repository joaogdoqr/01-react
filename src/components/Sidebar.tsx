import { Pencil } from "lucide-react";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=0.6"
        alt="user profile cover"
      />
      <div className="flex flex-col items-center -mt-8">
        <Avatar
          src="https://github.com/joaogdoqr.png"
          alt="user profile image"
        />

        <strong className="mt-4 text-gray-100 leading-[1.6rem]">Tux</strong>
        <span className="text-[0.875rem] text-gray-400 leading-[1.6rem]">
          Web Developer
        </span>

        <footer className="border-t-[1px] border-gray-600 mt-6 pt-6 pb-8 px-8">
          <a
            className="bg-transparent text-green-500 border border-green-500 rounded-lg h-[50px] px-6 font-bold  no-underline flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-colors duration-100"
            href="#"
          >
            <Pencil size={20} />
            Edit your profile
          </a>
        </footer>
      </div>
    </aside>
  );
};
