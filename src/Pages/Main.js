import React from "react";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import "./Main.css";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="tindev" />
      <ul>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Carlos Queiroz</strong>
            <p>quando eu tinha algo</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Carlos Queiroz</strong>
            <p>quando eu tinha algo</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src={logo} alt="" />
          <footer>
            <strong>Carlos Queiroz</strong>
            <p>quando eu tinha algo</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
