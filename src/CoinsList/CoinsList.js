import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../Coin';
import { ALL_COINS } from '../Constants/Constants';

const DATA_FETCH_INTERVAL = 30000;

function CoinsList() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    const getCryptoData = useCallback(() => {
        axios.get(ALL_COINS).then((res) => {
                setCoins(res.data)
            })
        .catch((error) => {
            console.error(`Error on request ${ALL_COINS}: ${error}`);
            setError(true);
        });
    }, [setCoins]);

    useEffect(() => {
        getCryptoData();
        const interval = setInterval(function() {
            getCryptoData();
        }, DATA_FETCH_INTERVAL);
        setIntervalID(interval);

        return () => clearInterval(intervalID);
    }, [getCryptoData]);

    const handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [setSearch]);

    const filteredCoins = useCallback(() =>
        coins.filter(coin =>
            coin.name.toLowerCase()
                .includes(search.toLocaleLowerCase())), [coins, search]);

    const RenderAllCoins = useCallback(() => {
        const coins = filteredCoins();
        return coins.map((coin) => {
            return (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    marketCap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                />
            )
        })
    }, [filteredCoins]);

    const RenderErrorMessage = useCallback(() => {
        if (!error) {
            return null;
        }

        return <h1>There was an error fetching data, please try refreshing the page.</h1>;
    }, [error])

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">
                    <i className="fab fa-dyalog"></i>
                        &nbsp;DECENTRALIZED
                </h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        className="coin-input"
                        onChange={handleChange}
                    />
                </form>
            </div>
            <RenderErrorMessage />
            <RenderAllCoins />
        </div>
    );
}

export default CoinsList;