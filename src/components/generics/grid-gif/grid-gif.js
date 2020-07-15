import React from "react";
import GifItem from "../git-item/git.item";

const GridGifs = (props) => {
  const gifItems = props.data.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />;
  });

  if (props.data.word !== "") {
    return (
      <div>
        <h1>Resultados para: "{props.data.word}"</h1>
        <div className="gif-list">{gifItems}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default GridGifs;
