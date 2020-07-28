import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { picture } = user;
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
      <div>
        <span
          aria-label="rocket"
          role="img"
          className="text-2xl lg:text-3xl m-5"
        >
          🚀
        </span>
      </div>
      <div>
        {!isAuthenticated ? (
          <div className="flex py-1">
            <button
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup",
                })
              }
              className="hover:text-blue-500 block text-center text-sm font-semibold tracking-wider text-gray-100  px-6 py-4 rounded  focus:shadow-outline focus:outline-none transition-colors duration-300"
            >
              Sign up
            </button>
            <button
              onClick={() => loginWithRedirect()}
              className="mx-2 block text-center text-sm font-semibold tracking-wider  text-gray-100 bg-indigo-500 px-6 py-4 rounded hover:bg-indigo-700 focus:shadow-outline focus:outline-none transition-colors duration-300"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex py-1 items-center">
            <button
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
              className="mx-2 block text-center text-sm font-semibold tracking-wider  text-gray-100 bg-indigo-500 px-4 py-3 rounded hover:bg-indigo-700 focus:shadow-outline focus:outline-none transition-colors duration-300"
            >
              Logout
            </button>
            <img className="w-10 h-10 rounded-full" alt="" src={picture} />
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
