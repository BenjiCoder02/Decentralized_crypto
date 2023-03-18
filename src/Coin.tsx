import React, { useCallback, useState } from 'react';

import './Coin.css';
import PlotChart from './Graphs/PlotChart';

const Coin = (({ name, id, image, symbol, price, volume, priceChange, marketCap, last_updated }) => {
    const [isActive, setIsActive] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);

    const RenderPrice = useCallback(() => {
        if (priceChange < 0) {
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
    }, []);

    const formatPrice = (price) => {
        const priceLabel = ['T.', 'H.', 'M.', 'B.']
        const priceArr = price.split(',');

        return `${priceArr[0]} ${priceLabel[priceArr.length - 1]}`

    }

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
                <ul className="list-unstyled d-flex justify-content-around align-items-center coin">
                    <li>
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
                        {/*<h1>{name}</h1>*/}</li>
                    <li><p className="coin-symbol">{symbol}</p></li>
                    <li><p className="coin-price">${price}</p></li>
                    <li><p className="coin-volume">${formatPrice(volume.toLocaleString())}</p></li>
                    <li><RenderPrice /></li>
                    <li><p className="coin-marketcap">
                        Mkt Cap: ${formatPrice(marketCap.toLocaleString())}
                    </p>
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default Coin