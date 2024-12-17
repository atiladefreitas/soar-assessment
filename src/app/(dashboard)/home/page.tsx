interface ICardProps {
  variant?: "dark" | "light";
}
function CardComponent({ variant = "dark" }: ICardProps) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[25px] border border-[#c4c4c4] ${variant === "dark" ? "bg-[#5B5A6F]" : "bg-white"}`}
    >
      <span className="flex p-6">
        <div>
          <p className={`text-sm text-white/80`}>balance</p>
          <p
            className={`text-xl font-bold ${variant === "dark" ? "text-white" : "text-gray-800"}`}
          >
            $5,756
          </p>
        </div>
      </span>

      <span className="flex items-center justify-between p-6">
        <div>
          <p className={`text-sm uppercase text-white/80`}>card holder</p>
          <p className={`font-bold text-white`}>Eddy Cusuma</p>
        </div>

        <div>
          <p className={`text-sm uppercase text-white/80`}>valid thru</p>
          <p className={`font-bold text-white`}>12/22</p>
        </div>
      </span>

      <div
        className={`min-h-[2rem] ${variant === "dark" ? "bg-gray-800" : "border-t-[2px] bg-white"} p-6`}
      >
        <p
          className={`text-2xl ${variant === "dark" ? "text-white" : "text-gray-800"}`}
        >
          3778 **** **** 1234
        </p>
      </div>
    </div>
  );
}
function Home() {
  return (
    <section className="flex w-full flex-col gap-6 overflow-y-scroll text-gray-800">
      <div className="grid grid-cols-3 flex-row gap-6">
        <div className="col-span-2 flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">My Cards</h1>
            <h1 className="mb-4 text-xl font-bold text-gray-800">See all</h1>
          </div>

          <div className="flex gap-6">
            <CardComponent />
            <CardComponent variant="light" />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Recent Transactions
          </h1>

          <div className="rounded-[25px] border border-[#c4c4c4] bg-white p-6">
            <p>deposit</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 flex-row gap-6">
        <div className="col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Weekly activity
          </h1>

          <div className="min-h-[20rem] w-full rounded-[25px] border bg-white"></div>
        </div>

        <div className="">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Expense Statistics
          </h1>

          <div className="min-h-[20rem] w-full rounded-[25px] border bg-white"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 flex-row gap-6">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Quick Transfer
          </h1>

          <div className="min-h-[20rem] w-full rounded-[25px] border bg-white"></div>
        </div>

        <div className="col-span-2">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Balance History
          </h1>

          <div className="min-h-[20rem] w-full rounded-[25px] border bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
