import React, { useCallback } from 'react';
import './Coin.css';

const Coin = (({ name, image, symbol, price, volume, priceChange, marketCap }) => {

    const RenderPrice = useCallback(({ price }) => {
        if (price < 0) {
            return (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            );
        }
            
        return (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )
    }, [price, priceChange]);

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>

                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    <RenderPrice 
                        price={price}
                    />
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
})

export default Coin