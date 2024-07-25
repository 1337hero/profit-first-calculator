import React from 'react'

const BreakdownTable = ({ breakdown }) => {
  if (!breakdown) return null

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0 min-w-[200px]">
                  Account
                </th>
                <th scope="col" className="px-3 py-3.5 text-center text-lg font-semibold text-gray-900 min-w-[100px]">
                  Percentage
                </th>
                <th scope="col" className="px-3 py-3.5 text-lg text-right font-semibold text-gray-900 min-w-[150px]">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {breakdown.map((item) => (
                <tr key={item.category}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-0 min-w-[200px]">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-center text-blue-800 min-w-[100px]">{item.percentage}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-right text-lime-800 min-w-[150px]">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BreakdownTable