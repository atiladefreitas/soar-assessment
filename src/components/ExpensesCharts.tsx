"use client";
import React from "react";
import dynamic from "next/dynamic";
import { PieChart as PieChartIcon } from "lucide-react";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ExpenseChart = () => {
  const chartConfig: { series: number[]; options: ApexOptions } = {
    series: [30, 20, 15, 35],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
      colors: ["#312e81", "#4338ca", "#ff8a00", "#1f1f1f"],
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "0%",
          },
          expandOnClick: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}.0%`,
        style: {
          fontSize: "14px",
          fontFamily: "inherit",
          fontWeight: 500,
          colors: ["#fff"],
        },
        dropShadow: {
          enabled: false,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => `${val}%`,
        },
      },
      stroke: {
        show: false,
      },
    },
  };

  return (
    <Chart
      options={chartConfig.options}
      series={chartConfig.series}
      type="pie"
      height={250}
    />
  );
};

export default ExpenseChart;
