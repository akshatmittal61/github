import React, { useState } from "react";
const Theme = () => {
    const [theme, setTheme] = useState((parseInt(Date().substring(16, 18)) < 18) && (parseInt(Date().substring(16, 18)) > 6) ? "light" : "dark");
    const body = document.querySelector("body");
    function changeTheme() {
        setTheme((theme === "light") ? "dark" : "light");
    }
    body.setAttribute("class", theme);
    return (
        <div className="theme" onClick={changeTheme}>
            <span className="theme-icon material-icons" id={theme}>
                {`${theme}_mode`}
            </span>
        </div>
    )
}
export default Theme;