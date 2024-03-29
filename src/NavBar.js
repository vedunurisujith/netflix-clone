import React, { useEffect, useState } from "react";
import "./nav.css";
import { FcMenu } from "react-icons/fc";

function NavBar() {
//   const [show, showHandler] = useState(false);
//   // const downSlide = () => {
//   //   if (window.scrollY > 100) {
//   //     showHandler(true);
//   //   } else {
//   //     showHandler(false);
//   //   }
//   // };
  // useEffect(() => {
  //   window.addEventListener("scroll", showHandler);
  //   return () => {
  //     window.removeEventListener("scroll", showHandler);
  //   };
  // }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
 };
 useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
 }, [lastScrollY]);


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src= "./netflix_logo.png"
          alt=""
        ></img>
        <div className="nav_list">

          <a href="" className="nav_list_objects">Home</a>
          <a href="" className="nav_list_objects">TV Shows</a>
          <a href="" className="nav_list_objects">Movies</a>
          <a href="" className="nav_list_objects">New Popular</a>
<a  href=""className="nav_list_objects">My List</a>
          <a href="" className="nav_list_objects" >
          <img
          className="nav_avator"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          ></img>
          </a>
          </div>
      </div>
    </div>
  );
}

export default NavBar;
