import axios from 'axios';
import 'chart.js/auto';
import { useCallback, useEffect, useState } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { GET_COIN_HISTORICAL_DATA } from '../Constants/Constants';
import { CHART_CONFIG_DEFAULTS, OPTIONS } from './ChartConfig';

function PlotChart(props) {

    const { name, id } = props;
    const URL = GET_COIN_HISTORICAL_DATA.replace('{coinId}', id);
    const [labels, setLabels] = useState([]);
    const [chartData, setChartData] = useState([]);

    const fillData = useCallback(() => {

        axios.get(URL).then((res) => {
            const { prices } = res.data;
            const arrayOfChartData = [];
            const labelArray = [];

            for (let i = 0; i < prices.length; i++) {
                let currentData = CHART_CONFIG_DEFAULTS;
                const newDate = new Date(prices[i][0]);
                const date = `${newDate.getHours()}:${newDate.getSeconds()}`
                labelArray.push(date);
                currentData.id = prices[i][1];
                currentData.label = date;
                currentData.data = prices;
                arrayOfChartData.push(currentData);
            };

            setLabels(prevState => [...prevState, ...labelArray]);
            setChartData(prevState => [...prevState, ...arrayOfChartData]);
            console.log(arrayOfChartData)
        }).catch(err => { console.error(err) });
    }, [URL])

    useEffect(() => {
        fillData();

    }, []);

    return (
        <Line datasetIdKey={name}
            data={{
                labels: labels,
                datasets: chartData,
            }}
            options={OPTIONS}
        />
    );
}

export default PlotChart;