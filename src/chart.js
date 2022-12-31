import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' ,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Recycled Books',
      fontSize: 10,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'];
export const data = {
  labels,
  datasets: [
    {
      label: 'kg',
      data: [114,200,400,250,300,700,500,456,389,756,900,500],
      borderColor: '#16213E',
      backgroundColor: '#6FEDD6',
    },
  ],
};

function Chart() {
return <Bar options={options} data={data}/>;
}

export default Chart;
/*rgba(255, 99, 132, 0.5)     rgb(255, 99, 132)           labels.map(() => faker.datatype.number({ min: 50, max: 1000 })),*/