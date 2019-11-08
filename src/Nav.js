import React, { useContext } from "react"; // Can also use a "render prop", but there's this hook!
import InternationalizationContext from "./InternationalizationContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#614476"
  };
  const { language, setLanguage } = useContext(InternationalizationContext);

  return (
    <nav className="navbar">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
      <button
        onClick={() =>
          setLanguage(language === "English" ? "Español" : "English")
        }
      >
        Switch to {language === "English" ? "Español" : "English"}
      </button>
      {language === "English" ? "Hi User!" : "¡Hola Amigo!"}
    </nav>
  );
}

export default Nav;
