import React, { useEffect, useState } from "react";
import { API_HOST_ADDRESS } from "../envVars";
import CardList from "./CardList";

function CoinsListContainer({ props }) {
  const [coinsList, setCoinsList] = useState([]);
  useEffect(() => {
    (async () => {
      const query = props.query || "all";
      const res = await fetch(`${API_HOST_ADDRESS}/api/stats/${query}`);
      console.log(process.env);
      const json = await res.json();
      setCoinsList(json);
    })();
  }, [props.query]);
  return (
    <>
      <section>
        <CardList props={coinsList} />
      </section>
    </>
  );
}

export default CoinsListContainer;
