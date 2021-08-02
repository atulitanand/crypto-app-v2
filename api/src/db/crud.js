import { CoinModel } from "./Schemas/CoinSchema";

export const createCoin = (coinDetails) => {
  return CoinModel.create(coinDetails);
};

export const getAllCoins = () => {
  return CoinModel.find({}).exec();
};
