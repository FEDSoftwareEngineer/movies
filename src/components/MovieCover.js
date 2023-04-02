import React from "react";
import { FaPlay } from "react-icons/fa";
import style from "../styles/MovieCover.module.css";

//custom
import useProgressiveImg from "../Hooks/useProgressive";

export default function MovieCover({ lqImg, img, title, type, rated, time }) {
  const [src, { blur }] = useProgressiveImg(lqImg, img);
  return (
    <div className={style.movieCover}>
      <div className={style.movieCoverImg}>
        <img
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "0.2s ease-out",
          }}
          src={src}
          alt=""
        />
      </div>
      <FaPlay className={style.movieHover} />
      <div className={style.movieItems}>
        <h1>{title}</h1>
        <p>{type}</p>
        <div className={style.rowBetween}>
          <p>{rated}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}
