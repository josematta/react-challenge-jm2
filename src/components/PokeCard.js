import React from "react";

function PokeCard(props) {
  return (
    <div>
      <h1>{props.item.name}</h1>

      <div className="poke-item">
        <img src={props.item.sprites.front_default} alt="" />
      </div>
      <div className="poke-item">
        <img src={props.item.sprites.front_shiny} alt="" />
      </div>

      <a href={props.item.video}>Watch Video</a>
    </div>
  );
}

export default PokeCard;
