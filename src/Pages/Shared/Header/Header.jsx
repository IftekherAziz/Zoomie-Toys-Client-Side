import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout:
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        {user && (
          <Link to="/addAToy">
            <button>Add a Toy</button>
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link to="/myToy">
            <button>My Toy</button>
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {items}
              </ul>
            </div>
            <Link to="/">
              <img
                className="w-32 h-20"
                src="https://i.ibb.co/PmNzCY8/log-removebg-preview.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{items}</ul>
          </div>
         
          <div className="navbar-end mr-4">
                <div>
                    <li className="list-none">
                        {
                            user ? <button className="btn-sm btn-primary rounded mr-4" onClick={handleLogOut}>LogOut</button> :
                                <Link to='/login'><button className="btn-sm btn-primary rounded mr-4">Login</button></Link>
                        }
                    </li>
                </div>
                <div>
                    <label className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="rounded-full">
                            {
                                user && <img src={user?.photoURL} />
                            }
                        </div>
                    </label>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
