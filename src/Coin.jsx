import React, { useCallback, useState } from 'react';

import './Coin.css';
import PlotChart from './Graphs/PlotChart';

const Coin = (({ name, id, image, symbol, price, volume, priceChange, marketCap, last_updated }) => {
    const [isActive, setIsActive] = useState(false);
    const [renderedCoinChart, setRenderedChart] = useState('');
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
        if (e.target.className === 'coin-hover-effect' || e.target.className === `${name}-chart`) {
            const elementsWithHoverClass = document.getElementsByClassName('hover');
            if (elementsWithHoverClass.length > 1) {
                elementsWithHoverClass.forEach(el => el.classList.remove('hover'));
            }

            const hoveredElement = document.getElementById(`${element}-chart`);
            hoveredElement.classList.add('hover');
        }
    }, [name]);

    const handleMouseLeave = useCallback((e) => {
        const element = e.target.id;
        setIsActive(false);
        if (e.target.className === 'coin-hover-effect' || e.target.className === `${name}-chart`) {
            const elementsWithHoverClass = document.getElementsByClassName('hover');
            if (elementsWithHoverClass.length > 1) {
                elementsWithHoverClass.forEach(el => el.classList.remove('hover'));
            }
            const hoveredElement = document.getElementById(`${element}-chart`);
            hoveredElement.classList.remove('hover');
        }
    }, [name]);

    const setCoinChartWasRendered = useCallback((value) => {
        setRenderedChart(value);
    }, []);

    const setChartDataForCoin = useCallback((chartdata, labels) => {
        setChartData(prevState => [...prevState, ...chartdata]);
        setLabels(prevState => [...prevState, labels]);
    }, [])

    const RenderChart = useCallback(() => {
        if (!isActive && name === 'bitcoin') {
            return null;
        }

        return (
            <PlotChart
                name={name}
                id={id}
                last_updated={last_updated}
                setCoinChartWasRendered={setCoinChartWasRendered}
                setChartDataForCoin={setChartDataForCoin}
                chartData={chartData}
                labels={labels}
            />
        );
    }, [chartData, id, isActive, last_updated, name, setChartDataForCoin, setCoinChartWasRendered]);

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <div className={`coin-info ${name}`} id={`${name}-chart`} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} >
                        <img src={image} alt="crypto" id={name} className="coin-hover-effect" />
                        <div className="chart-container" >
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