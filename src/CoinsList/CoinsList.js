import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../Coin';
import { ALL_COINS } from '../Constants/Constants';

const DATA_FETCH_INTERVAL = 60000;

function CoinsList(props) {
    const { search, quantity } = props;
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    const getCryptoData = useCallback(() => {
        const URL = ALL_COINS.replace('{QTY}', quantity);
        axios.get(URL).then((res) => {
            setCoins(res.data)
        })
            .catch((error) => {
                console.error(`Error on request ${ALL_COINS}: ${error}`);
                setError(true);
            });
    }, [setCoins]);

    useEffect(() => {
        getCryptoData();
        const interval = setInterval(function () {
            getCryptoData();
        }, DATA_FETCH_INTERVAL);
        setIntervalID(interval);

        return () => clearInterval(intervalID);
    }, [getCryptoData]);

    const filteredCoins = useCallback(() => {
        if (!search) {
            return coins;
        }
        return coins.filter(coin =>
            coin.name.toLowerCase()
                .includes(search.toLocaleLowerCase()));
    }, [coins, search]);




    const filterCoins = filteredCoins() || coins;

    if (error) {
        return (
            <h1>
                There was an error fetching data, please try refreshing the page.
            </h1>
        );
    }

    return (
        <div className="coin-app">
            {filterCoins.map((coin) => (
                <Coin
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    marketCap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                    last_updated={coin.last_updated}
                />
            )
            )}
        </div>
    );
}

export default CoinsList;