import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// import { Chart, Colors, DoughnutController } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';
// import { Utils } from 'chart.js/types';
// import ApexCharts from 'apexcharts'
import { renderDashboardEvents } from "./Application/events/dashboard-events";
import * as Utils from './Presentation/utils/chartjs-utils'

Chart.register(ChartDataLabels)

Chart.defaults.backgroundColor = 'rgba(31, 255, 14, 0.07)';
Chart.defaults.borderColor = '#000';
Chart.defaults.color = '#000';

const DashboardApp = () => {
    (async () => {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
        ];

        new Chart(
            document.getElementById('users-chart'),
            {
                type: 'doughnut',
                data: {
                    labels: ['Active Users', 'Inactive Users'],
                    datasets: [
                        {
                            label: 'Users',
                            data: data.map(row => row.count),
                            backgroundColor: [
                                Utils.transparentize(Utils.CHART_COLORS.red, 0.6),
                                Utils.transparentize(Utils.CHART_COLORS.orange, 0.6),
                                Utils.transparentize(Utils.CHART_COLORS.yellow, 0.6),
                                Utils.transparentize(Utils.CHART_COLORS.green, 0.6),
                                Utils.transparentize(Utils.CHART_COLORS.blue, 0.6),
                            ]
                        },
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            // display: false
                            position: 'bottom'
                        },
                        datalabels: {
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value * 100 / sum).toFixed(2) + "%";
                                return percentage;
                            },
                            color: '#000',
                            anchor: 'end',
                            align: 'start',
                            offset: 20
                        }
                    }
                }
            }
        );
    })();

    renderDashboardEvents();
}

DashboardApp()
