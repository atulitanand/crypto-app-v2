import "dotenv/config";
import cors from "cors";
import express from "express";
import { connect } from "./db/connect";
import { createCoin, getAllCoins } from "./db/crud";
import { getCoinById, getCoinByQuery } from "./db/utilities";
// will be used for initializing users again
import { coinsList } from "./data";

const app = express();

app.use(cors());

// app.get("/mongo/createCoins", async (req, res) => {
//   for (const coin of coinsList) {
//     const coinData = await createCoin(coin);
//     console.log(coin.id);
//   }
//   res.status(400);
// });

app.get("/api/stats/all", async (req, res) => {
  const allCoins = await getAllCoins();
  res.json(allCoins);
  console.log("/api/stats/all");
});

app.get("/api/stats/:query", async (req, res) => {
  const result = await getCoinByQuery(req.params.query);
  res.json(result);
  console.log("/api/stats/" + req.params.query);
});

app.get("/api/stats/coin/:id", async (req, res) => {
  const coinDetails = await getCoinById(req.params.id);
  res.json(coinDetails);
  console.log("/api/stats/coin/" + req.params.id);
});

connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5050, () => {
      console.log("Server running at localhost:3000");
    });
  })
  .catch(() => console.log("Unable to connect with the database"));
