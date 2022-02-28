"use strict";

function Pokecard({ name, id, type }) {
  const imgSrc = (
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );

  return (
    <div>
      <h3>{name}</h3>
      <img alt="" src={imgSrc}></img>
      <p>{type}</p>
    </div>
  );
}

export default Pokecard;