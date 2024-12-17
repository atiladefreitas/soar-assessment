"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useEffect, useState } from "react";

const ExpenseChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>Loading...</div>;

  return (
    <ApexChart
      type="pie"
      series={[30, 20, 15, 35]}
      options={{
        labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
        colors: ["#312e81", "#4338ca", "#ff8a00", "#1f1f1f"],
        legend: {
          show: false,
        },
      }}
      height={250}
    />
  );
};

export default ExpenseChart;
