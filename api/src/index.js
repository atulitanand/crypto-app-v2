import "dotenv/config";
import cors from "cors";
import express from "express";
import { coinsList } from "./data";
import { getCoinById, getCoinByQuery } from "./utils";

const app = express();

app.use(cors());

app.post('/login', (req, res) => {
  res.json({ ...req.params })
  console.log('post');
});

app.get('/', (req, res) => {
  res.status(200).send(`
  <a href="/api/stats/all">/api/stats/all</a>
  <a href="/api/stats/id">/api/stats/id</a>
  <a href="/api/stats/coin/id">/api/stats/coin/id</a>
  `)
})

app.get("/api/stats/all", (req, res) => {
  res.status(200).json(coinsList);
});

app.get("/api/stats/:id", (req, res) => {
  const result = getCoinByQuery(req.params.id);
  res.json(result);
});

app.get("/api/stats/coin/:id", (req, res) => {
  const coinDetails = getCoinById(req.params.id);
  res.json(coinDetails);
});

app.listen(process.env.PORT || 5050, () =>
  console.log("API up and running at port " + process.env.PORT || 5050)
);
