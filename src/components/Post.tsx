function Post() {
  return (
    <article className="bg-gray-800 rounded-lg p-10 ">
      <header>
        <div className="">
          <img src="https://github.com/joaogdoqr.png" alt="author profile" />
          <div>
            <strong>Tux</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 may at 08:13" dateTime="2022-05-11 08:13:00">
          Published at 1h ago
        </time>

        <div className="leading-[1.6rem] text-gray-300 mt-6 [&>p]:mt-4 [&>a]:font-bold [&>a]:text-green-500 [&>a]:no-underline">
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉<a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  );
}

export default Post;
