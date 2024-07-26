import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getRelativePosition } from 'chart.js/helpers';
import * as Utils from './chartjs-utils'

Chart.register(ChartDataLabels)

Chart.defaults.backgroundColor = 'rgba(31, 255, 14, 0.07)';
Chart.defaults.borderColor = '#000';
Chart.defaults.color = '#000';

/**
 * Function to draw chart js for users
 * @param {Object} data
 * @returns {Chart} chart
 */
export const drawUsersChart = (data) => {
    const element = document.getElementById("users-chart");
    const options = getChartOptions();
    // const fakeData = getFakeData();

    const config = {
        type: "doughnut",
        data: data,
        options: options,
    };

    return new Chart(element, config);
};

/**
 * Fake data
 * @returns {Object}
 */
const getFakeData = () =>{
    const data = [
        {  count: 10 },
        {  count: 20 },
    ];

    return {
        labels: ["Active Users", "Inactive Users"],
        datasets: [
            {
                label: "Users",
                data: data.map((row) => row.count),
                backgroundColor: [
                    Utils.transparentize(Utils.CHART_COLORS.red, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.orange, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.yellow, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.green, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.blue, 0.6),
                ],
            },
        ],
    }
}

/**
 * Functon to generate options to chart 
 * @returns {Object}
 */
const getChartOptions = () => {
    return {
        plugins: {
            legend: {
                // display: false
                position: "bottom",
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map((data) => {
                        sum += data;
                    });
                    let percentage = ((value * 100) / sum).toFixed(2) + "%";

                    return percentage;
                },
                color: "#000",
                anchor: "end",
                align: "start",
                offset: 20,
            },
        },
    };
};
