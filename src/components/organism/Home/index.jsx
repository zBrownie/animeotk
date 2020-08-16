import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";
import { useCollection } from "@nandorojo/swr-firestore";
import AnimeContainer from "../../molecules/Home/AnimeContainer";
import { GiFlame } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

function Home() {
  const response = useCollection("animes", {
    // where: ["streaming", "==", 1],
    listen: true,
  });

  if (response.loading) {
    return (
      <div className="container">
        <ReactLoading type="spin" color="#23231f" />
      </div>
    );
  }

  if (response.data) {
    let day = new Date().getDay();

    let listSeason = response.data.filter((element) => {
      return element.streaming === 1;
    });

    let listLançamentos = response.data.filter((element) => {
      return element.streaming === 1 && element.pos === day;
    });
    return (
      <div className="container">
        <div className="title-anime-container">
          <GiFlame color="#ec1c24" />
          <p>Lançamentos</p>
        </div>
        <AnimeContainer listData={listLançamentos} />
        <div className="title-anime-container">
          <FaPlay color="#ec1c24" />
          <p>Season</p>
        </div>
        <AnimeContainer listData={listSeason} />
      </div>
    );
  }

  return <div className="container">{response.error}</div>;
}

export default Home;
