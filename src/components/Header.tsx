import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" w-full h-full ">
      <div className="container  w-full max-w-[1200px] mx-auto  flex justify-between">
        <div>
          <Link to={"/"} className="text-2xl font-black text-[#131D4F]">English Quizle</Link>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link className="cursor-pointer text-1xl font-blac" to={"/cards"}>Cards</Link>
            <Link className="cursor-pointer text-1xl font-blac" to={"/quizle"}>Quizle</Link>
            <Link className="cursor-pointer text-1xl font-blac" to={"/todoList"}>To-Do List</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
