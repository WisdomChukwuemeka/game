import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Layout = () => {
  const [menu, setMenu] = useState(true);
  const menubutton = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="layout">
        <header>
          <Link className="Link" to="/home">
            <h1 className="title">
              Lu<span>game</span>
            </h1>
          </Link>
          <nav>
            <ul>
              <li className="hide">support</li>
              <li className="hide">contact</li>
              </ul>
              <div className="menu">
                <div onClick={menubutton}>
                  {menu ? (
                    <i class="bi bi-list"></i>
                  ) : (
                    <i class="bi bi-x-lg"></i>
                  )}
                </div>
              </div>
            
          </nav>
        </header>
      </div>

      <div className="menu-div">
        {menu ? ("") : (
        <ul>
        <li>support</li>
        <li>contact</li>
        </ul>)  }
        
      </div>
    </>
  );
};
