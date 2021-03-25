import React from "react";
import CatImage from "./styles/images/cat.jpg";
import "./styles/css/main.scss";

export default function NavBar() {
  return (
    <div>
      <img src={CatImage} alt="" />
      <img src="https://i.imgur.com/rhXWp5r.jpeg" alt="" />
    </div>
  );
}
