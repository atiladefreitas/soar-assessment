import ActivityChart from "@/components/ActivityChart";
import BalanceChart from "@/components/BalanceChart";
import { CreditCard } from "@/components/CreditCard";
import ExpenseChart from "@/components/ExpensesCharts";
import TransactionList from "@/components/TransactionList";
import QuickTransfer from "@/components/ui/QuickTransfer";
import { transactions } from "@/mocks/transctions";
import { CreditCard as CardIcon } from "lucide-react";
import Image from "next/image";

function Home() {
  return (
    <section className="flex w-full flex-col gap-6 text-gray-800">
      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between gap-2 md:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">My Cards</h1>
            <h1 className="mb-4 text-xl font-bold text-gray-800">See all</h1>
          </div>

          <div className="flex gap-4 overflow-x-scroll">
            <CreditCard />
            <CreditCard variant="light" />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">
            Recent Transactions
          </h1>

          <TransactionList transactions={transactions} />
        </div>
      </div>

      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">
            Weekly activity
          </h1>

          <div className="flex min-h-[20rem] w-full flex-col justify-center rounded-[25px] border bg-white">
            <ActivityChart />
          </div>
        </div>

        <div className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">
            Expense Statistics
          </h1>

          <div className="flex min-h-[20rem] w-full items-center justify-center rounded-[25px] border bg-white">
            <ExpenseChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">
            Quick Transfer
          </h1>

          <div className="flex min-h-[20rem] w-full flex-col items-center justify-center rounded-[25px] border bg-white p-6">
            <QuickTransfer />
          </div>
        </div>

        <div className="h-[20rem] items-center justify-center md:col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-[#343C6A]">
            Balance History
          </h1>

          <BalanceChart />
        </div>
      </div>
    </section>
  );
}

export default Home;
