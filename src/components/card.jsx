import React from "react";

export default function Card({img,title,title_jp,synopsis}){
    return (
    <div className="card">
        <img src={img}/>
        <h2>{title}</h2>
        <h5>{title_jp}</h5>
        <p>{synopsis}</p>
    </div>)
}