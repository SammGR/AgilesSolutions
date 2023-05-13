import React from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart1 from "chart.js/auto";
Chart1.register(CategoryScale);

const PieChart = ({ views, labels, label }) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        data: views,
        label: label,
        backgroundColor: [
          "#2FDE00",
          "#00A6B4",
          "#ff6600",
          "#ff6770",
          "#eb22d0",
          "#c99f16",
        ],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00", "#885d00"],
      },
    ],
  };
  const pieChart = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          fontSize: 15,
        },
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default PieChart;
