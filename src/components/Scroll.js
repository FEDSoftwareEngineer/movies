import React, { useEffect, useState } from "react";
import MovieCover from "./MovieCover";
import data from "../Data";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "../styles/Scroll.module.css";

export default function Scroll({ type }) {
  const [newData, setNewData] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    if (type === "All") {
      setNewData(data);
    } else {
      const tempData = data.filter((item) => item.type.includes(type) === true);
      setNewData(tempData);
    }
  }, [type]);

  if (newData[0] === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1 className={style.scrollTitle}>{type} Movies</h1>
      <section className={style.scrollSection}>
        <div className={style.scrollBox}>
          <div className={style.scroll}>
            {newData.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={style.scrollItem}
                  id={type + index}
                >
                  <Link to={`/movies/${item.title}`}>
                    <MovieCover
                      lqImg={item.LQimg}
                      img={item.img}
                      title={item.title}
                      rated={item.rated}
                      type={item.type}
                      time={item.time}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <FaAngleRight
          className={style.scrollRight}
          style={{
            display:
              newData.length > 4 && scrollIndex < newData.length - 2
                ? "flex"
                : "none",
          }}
          onClick={(e) => {
            const index = scrollIndex + 4;
            e.preventDefault();
            document.getElementById(`${type}${index}`).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            });
            setScrollIndex(scrollIndex + 4);
          }}
        />

        <FaAngleLeft
          style={{
            display: newData.length > 4 && scrollIndex > 0 ? "flex" : "none",
          }}
          className={style.scrollLeft}
          onClick={(e) => {
            const index = scrollIndex - 4;
            e.preventDefault();
            document.getElementById(`${type}${index}`).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            });
            setScrollIndex(scrollIndex - 4);
          }}
        />
      </section>
    </>
  );
}
