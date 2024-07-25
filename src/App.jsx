import React, { useState } from "react";
import AmountInput from "./components/AmountInput";
import BreakdownTable from "./components/BreakdownTable";
import Layout from "./components/Layout";

function App() {
  const [amount, setAmount] = useState("");

  const calculateBreakdown = (value) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return null;

    return [
      {
        category: "Business Profit",
        percentage: "15%",
        amount: numValue * 0.15,
      },
      { category: "Owner's Pay", percentage: "45%", amount: numValue * 0.45 },
      {
        category: "Operating Expenses",
        percentage: "25%",
        amount: numValue * 0.25,
      },
      { category: "Taxes", percentage: "15%", amount: numValue * 0.15 },
    ];
  };

  const breakdown = calculateBreakdown(amount);

  return (
    <Layout>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
        <h1 className="text-2xl">Profit First Distribution Caculator</h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <AmountInput amount={amount} setAmount={setAmount} />
          <hr className="my-6" />
          <p className="mb-0">Amount of funds to distribute to each account:</p>
          <BreakdownTable breakdown={breakdown} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
