import React from 'react';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [coins, setCoins] = React.useState([]);

  React.useEffect(() => {
    getCoins();
  }, []);

  function getCoins() {
    return fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCoins(data);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='app'>
      <h1>Cryptocurrency Tracker</h1>
      {coins.length ? (
        coins.map((coin) => <h4 key={coin.symbol}>{coin.name}</h4>)
      ) : (
        <p>Coins not found...!</p>
      )}
    </div>
  );
};

export default App;
