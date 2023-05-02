import React from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imageUrl, description }) {
  return (
    <>
      <h2>{title}</h2>
      <img className="beast-img" src={imageUrl} alt={description} title={title} />
      <p>{description}</p>
    </>
  );
}
