import { Link } from "react-router-dom";

function Nav({ logOut }) {
  return (
    <nav className="flex justify-between items-center px-4  bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-5 text-slate-800">
        <Link to="/">Blog List</Link>{" "}
      </h1>

      <ul className="flex items-center gap-4">
        <li className="text-slate-700">
          <Link to="/compose">Compose</Link>
        </li>
        <li>
          {" "}
          <button
            onClick={logOut}
            className="bg-slate-700 text-white p-3 hover:bg-black"
          >
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
