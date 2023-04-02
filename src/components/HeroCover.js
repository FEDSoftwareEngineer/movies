import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "../styles/HeroCover.module.css";
export default function HeroCover({ title, rated, time, type }) {
  return (
    <div className={style.heroCover}>
      <div className={style.heroDetails}>
        <h1>{title}</h1>
        <p>{type}</p>
        <p>{rated}</p>
        <p>{time}</p>
        <Link to={`/movies/${title}`} className={style.heroCoverBtn}>
          <FaPlay style={{ width: 13, height: 13 }} /> Watch Now
        </Link>
      </div>
    </div>
  );
}
