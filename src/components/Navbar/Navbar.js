import "./Navbar.css";
import { FaReact } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { SiBigcartel } from "react-icons/si";
import { MdContactPhone } from "react-icons/md";
import { GiCartwheel } from "react-icons/gi";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const MenuItems = ["Home", "Services", "Products", "Contact Us"];
  const icon = [
    <IoHome />,
    <GiCartwheel />,
    <SiBigcartel />,
    <MdContactPhone />,
  ];

  const [menu, setMenu] = useState(true);

  const handleMenuIcon = () => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <nav className="NavbarItems">
          <div className="navbar-logo">
          <div className="menu-icon" onClick={() => handleMenuIcon()}>
              {menu ? <RxHamburgerMenu /> : <RxCross1 />}
            </div>
            <div className="reactlogo">
              React
              <span>
                {" "}
                <FaReact />
              </span>
            </div>
            
          </div>

          {menu ? (
            console.log("NO")
          ) : (
            <div className="side-bar">
              {MenuItems.map((menuItem, index) => (
                <>
                  <p>{icon[index]}</p>
                  <h4>{menuItem}</h4>
                  <br></br>
                </>
              ))}
              <div className="buttonInOut">
                <p className=" btn1" onClick={() => loginWithRedirect()}>
                  <BiLogIn className="icon" /> <h4> Log In</h4>
                </p>

                <p className=" btn1" onClick={() => logout()}>
                  {" "}
                  <HiOutlineLogout className="icon" />
                  <h4>Log out</h4>
                </p>
              </div>

              <h4>
                <FaRegCircleUser /> {user.nickname}
              </h4>
            </div>
          )}
        </nav>
      )}
      {/* Login Button */}
      {isAuthenticated ? null : (
        <>
          <div className="loginScreen">
            <h3>Click Below To Login</h3> <br></br>{" "}
            <button className="btne" onClick={() => loginWithRedirect()}>
              {" "}
              Log In{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
