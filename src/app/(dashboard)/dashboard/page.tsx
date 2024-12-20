import ActivityChart from "@/components/charts/ActivityChart";
import BalanceChart from "@/components/charts/BalanceChart";
import { CreditCard } from "@/components/CreditCard";
import ExpenseChart from "@/components/charts/ExpensesCharts";
import TransactionList from "@/components/TransactionList";
import QuickTransfer from "@/components/ui/QuickTransfer";
import { transactions } from "@/mocks/transctions";

function Home() {
  return (
    <section className="flex w-full flex-col gap-6 text-gray-800">
      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between gap-2 md:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-2xl font-bold text-main">My Cards</h1>
            <h1 className="mb-4 cursor-pointer text-xl font-bold text-main transition-all hover:-translate-y-1 hover:text-gray-600">
              See all
            </h1>
          </div>

          <div className="flex gap-4 overflow-x-scroll">
            <CreditCard />
            <CreditCard variant="light" />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <h1 className="mb-4 text-2xl font-bold text-main">
            Recent Transactions
          </h1>

          <TransactionList transactions={transactions} />
        </div>
      </div>

      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-main">Weekly activity</h1>

          <div className="flex min-h-[20rem] w-full flex-col justify-center rounded-[25px] border bg-white">
            <ActivityChart />
          </div>
        </div>

        <div className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-main">
            Expense Statistics
          </h1>

          <div className="flex min-h-[20rem] w-full items-center justify-center rounded-[25px] border bg-white">
            <ExpenseChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 flex-row gap-6 md:grid-cols-3">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold text-main">Quick Transfer</h1>

          <div className="flex min-h-[20rem] w-full flex-col items-center justify-center rounded-[25px] border bg-white p-6">
            <QuickTransfer />
          </div>
        </div>

        <div className="h-[20rem] items-center justify-center md:col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-main">Balance History</h1>

          <BalanceChart />
        </div>
      </div>
    </section>
  );
}

export default Home;
