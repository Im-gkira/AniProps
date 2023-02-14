import React from "react";
import Card from "./components/card.jsx";
import data from "./data";

export default function App() {
  let card = data.map((info) => (
    <Card
      key = {info.data.mal_id}
      img={info.data.images.jpg.image_url}
      title={info.data.title}
      title_jp={info.data.title_japanese}
      synopsis={info.data.synopsis}
    />
  ));
  return (
    <div className="main">
      {card}
    </div>
  );
}
