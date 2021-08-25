import React from "react";
import Card from "./Card";
import CoinsNotFound from "./CoinsNotFound";

function CardList({ props }) {
  return (
    <>
      {props.length === 0 ? <CoinsNotFound /> : props.map((coinDetail) => (
        <Card props={coinDetail} />
      ))}
    </>
  );
}

export default CardList;
