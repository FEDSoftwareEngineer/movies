import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../Data";
import { useEffect, useState } from "react";
import {
  FaPlay,
  FaExpand,
  FaBars,
  FaVolumeUp,
  FaUndoAlt,
} from "react-icons/fa";
import style from "../styles/SingleMovie.module.css";
import Loading from "../components/LoadingSuspense";

export default function SingleMovie() {
  const { movie } = useParams();
  const [theMovie, setTheMovie] = useState();
  useEffect(() => {
    setTheMovie(data.find((item) => item.title === movie));
  }, [movie]);
  if (theMovie === undefined) return <Loading />;

  return (
    <div className="container">
      <div className="space"></div>
      <div className={style.singleMovie}>
        <div className={style.movie}>
          <h1 className={style.error}>
            You need to sign in to watch {theMovie.title}
          </h1>
          <Link to="/signin">
            <h1 className={style.singleMovieBtn}>Sign in</h1>
          </Link>
          <div className={style.left}>
            <FaUndoAlt size={20} className="hoverWhite" />
            <FaPlay size={20} className="hoverWhite" />
            <FaUndoAlt flip size={20} className="flip hoverWhite" />
            <FaVolumeUp size={20} className="mx-3 hoverWhite" />
          </div>
          <div className={style.right}>
            <FaBars size={20} className="hoverWhite" />
            <FaExpand size={20} className="hoverWhite" />
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}
