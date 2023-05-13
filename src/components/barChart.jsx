import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart1 from "chart.js/auto";

Chart1.register(CategoryScale);

const BarChart = ({labels, views, downloads }) => {
  const barChartData = {
    labels,
    datasets: [
      {
        data:views,
        label: "Views",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
      {
        data: downloads,
        label: "Downloads",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          fontSize: 15,
        },
        legend: {
          display: true,
          position: "top",
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default BarChart;
