import React, { useCallback, useState } from 'react';

import './Coin.css';
import PlotChart from './Graphs/PlotChart';

const Coin = (({ name, id, image, symbol, price, volume, priceChange, marketCap, last_updated }) => {
    const [isActive, setIsActive] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);

    const RenderPrice = useCallback(({ price }) => {
        if (price < 0) {
            return (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            );
        }

        return (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )
    }, [priceChange]);

    const handleMouseHover = useCallback((e) => {
        const element = e.target.id;
        setIsActive(true);
        const hoveredElement = document.getElementById(`${element}-chart`);
        hoveredElement?.classList.add('hover');
    }, []);

    const handleMouseLeave = useCallback((e) => {
        const element = e.target.id;
        setIsActive(false);
        const hoveredElement = document.getElementById(`${element}-chart`);
        hoveredElement?.classList.remove('hover');
    }, []);

    const setChartDataForCoin = useCallback((chartdata, labels) => {
        setChartData(prevState => [...prevState, ...chartdata]);
        setLabels(prevState => [...prevState, labels]);
    }, [])

    const RenderChart = useCallback(() => {
        if (!isActive) {
            return null;
        }

        return (
            <PlotChart
                name={name}
                id={id}
                last_updated={last_updated}
                setChartDataForCoin={setChartDataForCoin}
                chartData={chartData}
                labels={labels}
            />
        );
    }, [chartData, id, isActive, labels, last_updated, name, setChartDataForCoin]);

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <div
                        className={`coin-info ${name}`}
                        id={`${name}-chart`}
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={image} alt="crypto" id={name} className="coin-hover-effect" />
                        <div className="chart-container">
                            <RenderChart />
                        </div>
                    </div>
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