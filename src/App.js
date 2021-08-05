import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Coin from "./Coin"


function App() {

  {/* Setting initial state for the input search bar*/}

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  { /*
    1. using useEffect to make api call on load 
    2. using axios to make api calls to coingecko
    3. setting interval to make calls every 2 seconds.*/}
  useEffect(() => {
    setInterval(function () {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data)
          
        })
        .catch(error => console.log(error));
    }, 2000)

  }, [])

  {/* This function will handle changes to input state*/}
  const handleChange = e => {
    setSearch(e.target.value)
  }

  {/* This function filters the displayed coins based on the search field */}
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"><i class="fab fa-dyalog"></i> DECENTRALIZED</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
        
         </div>

{/* Function call that maps only coins matching the search term */}
      {filteredCoins.map(coin => {
        {/* Passing coin API data to the coin component using props*/}
        return (
         
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
        )
      })}

    </div>
  );
}

export default App;
