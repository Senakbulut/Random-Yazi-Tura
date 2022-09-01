import React from "react";
import "./Coin.css";
import CoinTura from "../../assets/1-lira-tura.png";
import CoinYazi from "../../assets/1-lira-yazi.png";

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={CoinTura}
          alt="Tura"
          className={props.side === "yazi" ? "Coin-back" : "Coin-front"}
        />
        <img
          src={CoinYazi}
          alt="Yazı"
          className={props.side === "yazi" ? "Coin-front" : "Coin-back"}
        />
      </div>
    </div>
  );
};

export default Coin;
