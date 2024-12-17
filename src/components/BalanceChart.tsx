"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BalanceChart = () => {
  const chartConfig = {
    type: "line",
    height: 320,
    series: [
      {
        name: "Balance",
        data: [200, 450, 400, 800, 250, 550, 600],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["#1814F3"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.05,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        borderColor: "#f3f4f6",
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div className="h-full rounded-[25px] bg-white shadow-sm">
      <Chart {...chartConfig} type="area" />
    </div>
  );
};

export default BalanceChart;
