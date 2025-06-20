import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {theme, setTheme} = useContext(themeContext);
  const {language,setLanguage} = useContext(languageContext)



  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
          <button onClick={()=>setTheme(theme ==="light"?"dark":"light")}>{theme === "light"?"Dark Theme":"Light Theme"}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
