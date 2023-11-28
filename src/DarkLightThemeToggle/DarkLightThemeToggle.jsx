import { useContext, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthProvider";

const DarkLightThemeToggle = () => {
  const { theme, setTheme } = useContext(AuthContext);

  /* theme  */
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="text-white bg-transparent lg:flex lg:items-center"
      onClick={handleToggle}
    >
      {theme === "dark" ? (
        <FaMoon className="text-lg" />
      ) : (
        <BsSunFill className="text-lg text-white" />
      )}
    </button>
  );
};

export default DarkLightThemeToggle;
