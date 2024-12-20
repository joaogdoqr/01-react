import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Post from "./components/Post";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-6xl m-8 mx-auto px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />

        <main className="space-y-10">
          <Post
            author="Tux"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis."
          />
        </main>
      </div>
    </>
  );
}

export default App;
