import React from "react";

const AmountInput = ({ amount, setAmount }) => {
  return (
    <div>
      <label
        htmlFor="amount"
        className="block text-md mb-2 font-medium leading-6 text-gray-900"
      >
        Enter income dollar amount
      </label>
      <div className="mt-4 sm:mt-0 sm:flex-none">
        <input
          id="amount"
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="eg: $1,500"
          className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
        />
      </div>
    </div>
  );
};

export default AmountInput;
