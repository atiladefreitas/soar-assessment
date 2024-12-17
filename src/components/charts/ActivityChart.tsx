"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ActivityChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#4F46E5", "#020617"],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "60%",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top" as const,
      horizontalAlign: "right",
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
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
      min: 0,
      max: 500,
      tickAmount: 5,
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
      show: true,
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "light",
    },
  };

  const series = [
    {
      name: "Deposit",
      data: [220, 120, 240, 350, 220, 220, 320],
    },
    {
      name: "Withdraw",
      data: [450, 340, 310, 470, 150, 380, 380],
    },
  ];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="px-2 pb-0">
        {isClient && (
          <Chart options={options} series={series} type="bar" height={240} />
        )}
      </div>
    </div>
  );
};

export default ActivityChart;
