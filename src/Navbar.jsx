import React from 'react'
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from './Context';
function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu=(e)=>{
    const page=e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center=(tempBtn.left+tempBtn.right)/2;
      const bottom=tempBtn.bottom-3;
      openSubmenu(page,{center,bottom});
      
  }
    const handleSubmenu = (e) => {
      if (!e.target.classList.contains("link-btn")) {
        closeSubmenu();
      }
    };
  return (
    <nav className="nav" onMouseMove={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
      </div>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
}

export default Navbar