import axios from 'axios';
import 'chart.js/auto';
import { useCallback, useEffect, useState } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { GET_COIN_HISTORICAL_DATA } from '../Constants/Constants';
import { OPTIONS } from './ChartConfig';

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
                const newDate = new Date(prices[i][0]);
                let formatDate = `${newDate.getHours()}:${newDate.getSeconds()}`
                labelArray.push(formatDate);
                arrayOfChartData.push(prices[i][1]);
            };

            setLabels(prevState => [...prevState, ...labelArray]);
            setChartData(prevState => [...prevState, ...arrayOfChartData]);
        }).catch(err => { console.error(err) });
    }, [URL])

    useEffect(() => {
        fillData();
    }, []);

    return (
        <Line datasetIdKey={name}
            data={{
                labels: labels,
                datasets: [
                    {
                        label: 'Prices',
                        data: labels.map((data, index) => chartData[index]),
                        backgroundColor: 'white',
                        color: 'white',
                        borderColor: 'white',
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                    }
                ],
            }}
            options={OPTIONS}
        />
    );
}

export default PlotChart;