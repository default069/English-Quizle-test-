function Main() {
  return (
    <div className="w-full h-full ">
      <div className="container w-full max-w-[1200px] mx-auto h-full">
        <h1 className="animate-fade-up animate-once  flex justify-center items-center  mt-7 text-6xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-black ">
          Welcome
        </h1>
        <div className="animate-fade-up animate-once flex flex-col items-start justify-center gap-2.5 mt-4">
          <h2 className="font-black text-2xl">
            What can you do on the website?
          </h2>
          <p>
            On my website, you will be able to: <br />
            Add flashcards to help memorize vocabulary. <br />
            Take tests where you see a word in English and try to guess its
            meaning in Russian or Uzbek. <br />
            Create your own word lists, like a To-Do List for vocabulary. <br />
            This is just the beginning — more features will be added soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
