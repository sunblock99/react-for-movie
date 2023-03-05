import { useState, useEffect } from "react";

function App() {
  const  [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((Response)=> Response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
  });
  },[])

  
  return (
  <div>
    <h1>Coin ! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? <strong>로딩중...</strong> : (<select>
      {coins.map((coin) => <option>{coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD</option>)}
    </select>)}
  </div>
  )
  
  
}

export default App;
 