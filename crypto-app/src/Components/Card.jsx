import React from "react";
import { Link } from "react-router-dom";
import { API_COIN_ID, HOST_ADDRESS } from "../envVars";
import './Card.css'

function Card({ props: coin }) {
  return (
    /* jslint ignore: start */
    <>
      <Link to={`${coin.id}`}>
        <div className="coin_container">
          <div className="coin_row">
            <div className="coin">
              <img src={coin.image} alt={coin.id} className="coin_img" />
              <h2 className="coin_h1">{coin.id}</h2>
            </div>
            <p className="coin_symbol">{coin.symbol}</p>
            <div className="coin_data">
              <p className="coin_price">{"$" + coin.current_price}</p>
              <p className="coin_volume">{"$" + coin.fully_diluted_valuation}</p>
              <p className="coin_percent">{coin.ath_change_percentage}</p>
              <p className="coin_marketcap">{coin.market_cap}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
    /* jslint ignore: end */
  );
}

export default Card;
