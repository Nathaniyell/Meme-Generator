import React from "react";
import "../index.css";
import Troll from "../assets/Troll Face.svg";
const Navbar = () => {
  return (
    <nav>
      <header>
        <img src={Troll} alt="nav-logo" />
        <h1>Meme Generator</h1>
      </header>
      <aside>React Course - Project 3</aside>
    </nav>
  );
};

export default Navbar;
