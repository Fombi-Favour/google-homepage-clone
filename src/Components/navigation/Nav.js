import React from "react";
import sideHustle from "../images/google_menu_icons.png"
import profileImg from "../images/profile.png"
import "./nav.css"
const Nav = ()=>{
    return (  
    <div className="nav">
        <ul>
            <li>Gmail</li>
            <li>images</li>
            <li><img src={sideHustle} alt="app icon"/></li>
          <li><img src={profileImg}/></li>
        </ul>

    </div>
    )
  
}
export default Nav;