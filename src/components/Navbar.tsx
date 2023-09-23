import { useState } from "react";
import { useThemeContext } from "../context/theme";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const [login, setLogin] = useState(false);

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex flex-grow justify-center md:justify-start mb-4 md:mb-0">
          <button className="text-lg font-bold text-indigo-500 dark:hover:text-white dark:text-orange-400 mr-4 mb-2 md:mb-0">
            Home
          </button>
          <button className={`text-lg ${theme ? "text-gray-800" : "dark:text-gray-400"} mr-4 mb-2 md:mb-0`}>
            Streams
          </button>
          <button className={`text-lg ${theme ? "text-gray-800" : "dark:text-gray-400"} mr-4 mb-2 md:mb-0`}>
            Party
          </button>
          <button className={`text-lg ${theme ? "text-gray-800" : "dark:text-gray-400"} mb-2 md:mb-0`}>
            Premium
          </button>
        </div>
        <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
          <h1 className={`text-3xl font-bold ${theme ? "text-gray-800" : "text-white"}`}>Gamor</h1>
        </div>
        <div className="flex justify-center md:justify-end gap-3">
          <button
            className={`rounded-full ${theme ? "text-gray-800" : "dark:text-gray-400"}`}
            onClick={() => setTheme(!theme)}
          >
            Theme
          </button>
          {login ? (
            <button
              className={`rounded-full ${theme ? "text-gray-800" : "dark:text-gray-400"}`}
              onClick={() => setLogin(!login)}
            >
              Sign In
            </button>
          ) : (
            <button
              className={`rounded-full ${theme ? "text-gray-800" : "dark:text-gray-400"}`}
              onClick={() => setLogin(!login)}
            >
              Sign Out
            </button>
          )}
          <button className="rounded-full bg-gray-800 border-white dark:bg-gray-600 dark:text-white py-2 px-3">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
