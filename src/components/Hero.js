import React, { useEffect } from "react";
import Background from "./Background";
import HeroCover from "./HeroCover";
import data from "../Data";
import { useState } from "react";
export default function Hero() {
  const [moviesHero, setMoviesHero] = useState([]);
  const [index, setIndex] = useState(0);

  const scroll = () => {
    const id = setInterval(() => {
      if (index < 4) {
        setIndex(index + 1);
        console.log(index);
      } else {
        setIndex(0);
      }
      clearInterval(id);
    }, 5000);
  };
  scroll();
  useEffect(() => {
    const newMovies = data.filter((item) => item.featured === true);
    setMoviesHero(newMovies);
  }, []);

  if (moviesHero[0] === undefined) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div className="hero">
        <Background
          image={moviesHero[index].img}
          lqImage={moviesHero[index].LQimg}
          title={moviesHero[index].title}
          bgClass="heroBg"
        />
        <HeroCover
          title={moviesHero[index].title}
          rated={moviesHero[index].rated}
          type={moviesHero[index].type}
          time={moviesHero[index].time}
        />
      </div>
    );
}
