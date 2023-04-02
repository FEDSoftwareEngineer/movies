import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isPhonebar, setIsPhonebar] = useState(false);
  return (
    <div className={style.navbar}>
      <div className={style.navbarLogo}>
        <Link to="/">
          <h1>Movies App</h1>
        </Link>
      </div>
      <FaBars
        onClick={() => setIsPhonebar(!isPhonebar)}
        className={style.navbarPhone}
      />
      <div className={`${style.navbarItems} ${!isPhonebar ? style.on : ""}`}>
        <FaTimes className={style.close} onClick={() => setIsPhonebar(false)} />

        <Link to="/" onClick={() => setIsPhonebar(false)}>
          <h1>Home</h1>
        </Link>
        <Link to="/about" onClick={() => setIsPhonebar(false)}>
          <h1>About</h1>
        </Link>
        <Link to="/signIn" onClick={() => setIsPhonebar(false)}>
          <h1>Sign up/in</h1>
        </Link>
      </div>
    </div>
  );
}
