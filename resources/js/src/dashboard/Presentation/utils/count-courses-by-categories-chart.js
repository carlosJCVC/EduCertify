import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getRelativePosition } from "chart.js/helpers";
import * as Utils from "./chartjs-utils";

Chart.register(ChartDataLabels);

Chart.defaults.backgroundColor = "rgba(31, 255, 14, 0.07)";
Chart.defaults.borderColor = "#000";
Chart.defaults.color = "#000";

/**
 * Function to draw chart js for users
 * @param {Object} data
 * @returns {Chart} chart
 */
export const drawCoursesByCategoriesChart = (data) => {
    const element = document.getElementById("categories-chart");
    const options = getChartOptions();
    const fakeData = getFakeData();

    const config = {
        type: "bar",
        data: data,
        options: options,
    };

    return new Chart(element, config);
};

/**
 * Fake data
 * @returns {Object}
 */
const getFakeData = () => {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = Utils.months({count: 7});

    return {
        labels: labels,
        datasets: [
            {
                label: 'Courses',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: [
                    Utils.transparentize(Utils.CHART_COLORS.red, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.orange, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.yellow, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.green, 0.6),
                    Utils.transparentize(Utils.CHART_COLORS.blue, 0.6),
                ],
              },
        ],
    };
};

/**
 * Functon to generate options to chart
 * @returns {Object}
 */
const getChartOptions = () => {
    return {
        plugins: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
            legend: {
                // display: false
                position: "bottom",
            },
        },
    };
};
