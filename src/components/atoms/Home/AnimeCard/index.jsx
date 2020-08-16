import React from "react";
import "./styles.css";

function AnimeCard(props) {
  return (
    <li className="anime-card">
      <a href={props.anime.link} target="_blank" rel="noopener noreferrer">
        <img src={props.anime.imgUrl} alt={props.anime.title} />
        {/* <p>{props.anime.title}</p> */}
      </a>
    </li>
  );
}

export default AnimeCard;
