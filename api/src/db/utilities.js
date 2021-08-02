import { CoinModel } from "./Schemas/CoinSchema";

export const getCoinByQuery = async (query) => {
  const coinsList = await CoinModel.find({});
  const result = coinsList.filter(
    (coin) =>
      coin.name.toLowerCase().toString().indexOf(query.toLowerCase()) !== -1
  );
  //   if (result.length === undefined) return [];
  return result;
};

export const getCoinById = async (id) => {
  return await CoinModel.findById(id);
};
