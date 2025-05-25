import React from "react";
import "./styles.css";
import { FaRocketchat } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
import { title } from "motion/react-client";

function CustomNavbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "Chat", path: "/chat" },
    { title: "People", path: "/people" },
    { title: "About us", path: "/about" },
    { title: "Request", path: "/request" },


  ];
  return (
    <div className="customNavbarBaseContainer">
      <div className="customNavbarLogoContainer">
        <FaRocketchat size={40} color={COLOR.blackColor} />
      </div>
      <div className="customNavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
      <div className="customNavbarProfileContainer">
        <FaCircleUser size={40} color={COLOR.blackColor} />
      </div>
    </div>
  );
}
export default CustomNavbar;
