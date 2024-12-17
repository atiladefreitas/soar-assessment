import type React from "react";

interface Transaction {
  title: string;
  date: string;
  icon: string;
  amount: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const getAmountColor = (amount: string) => {
    if (amount.includes("+")) return "text-green-600";
    if (amount.includes("-")) return "text-red-600";
    return "text-gray-900";
  };

  return (
    <div className="flex h-[15rem] flex-col justify-center space-y-4 p-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.title}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <img
                width={30}
                height={30}
                alt={`icon ${transaction.title}`}
                src={transaction.icon}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-900">{transaction.title}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <div>
            <p className={`font-medium ${getAmountColor(transaction.amount)}`}>
              {transaction.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
