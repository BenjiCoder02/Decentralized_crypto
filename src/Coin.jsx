import React from 'react'
import "./Coin.css"

//Coin component that recieves API data from the parent component

const Coin = (({ name, image, symbol, price, volume, priceChange, marketCap }) => {
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
                    {/* using toLocaleString to add commas for currency formatting*/}

                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                       /* adding classes for price changes and fixing the change percentage to 2 decimal points*/
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )
                    }
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
})

export default Coin