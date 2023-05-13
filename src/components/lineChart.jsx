import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart1 from "chart.js/auto";
Chart1.register(CategoryScale);

const LineChart = ({ labels, views, downloads }) => {
  const lineChartData = {
    labels,
    datasets: [
      {
        data: views,
        label: "Views",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: downloads,
        label: "Downloads",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
      }}
      data={lineChartData}
    />
  );
};
export default LineChart;
