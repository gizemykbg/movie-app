import React, { useState } from "react";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Switch } from "@material-ui/core/Switch";
// import { IconButton } from "@material-ui/core";

function ThemeToggler({ value }) {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  // const [navToggle, setNavToggle] = useState(false);

  // useEffect(()=>{
  //   document.documentElement.className = theme;
  // }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    // <Sidebar navToggle={navToggle} />
    <div className="theme">
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness3Icon />
        </div>
        <div className="right-content">
          <Switch
            value={value}
            checked={checked}
            inputProps={{ "aria-label": "" }}
            size="medium"
            onClick={themeToggler}
          />
          <Brightness5Icon />
        </div>
      </div>
    </div>
  );
}

export default ThemeToggler;
//
//    <div className="ham-burger-menu">
// <IconButton onClick={() => setNavToggle(!navToggle)}>
//     <MenuIcon />
// </IconButton>
// </div>
//
