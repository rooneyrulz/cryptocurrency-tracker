import React from 'react';
import { useQuery } from 'react-query';
import { LinearProgress, Grid } from '@material-ui/core';
import CoinItem from './CoinItem';

function getCoins() {
  return fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
}

const Coins = () => {
  const { data, error, isLoading } = useQuery('coins', getCoins);

  return isLoading ? (
    <LinearProgress />
  ) : data.length ? (
    <Grid container spacing={3}>
      {data.map((coin) => (
        <CoinItem key={coin.symbol} coin={coin} />
      ))}
    </Grid>
  ) : (
    <Grid container>
      {error?.message ?? 'Failed to fetch coins..!'}
    </Grid>
  );
};

export default Coins;
