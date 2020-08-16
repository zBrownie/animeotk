import React from "react";
import AnimeCard from "../../../atoms/Home/AnimeCard";
import "./styles.css";

function AnimeContainer({ listData }) {
  return (
    <div className="anime-container">
      {listData.map((anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
}

export default AnimeContainer;
