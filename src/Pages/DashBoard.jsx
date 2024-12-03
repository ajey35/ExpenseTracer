import { useExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const { transactions, removeTransaction } = useExpenseContext();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Transaction Dashboard</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-600 text-center">
          No transactions yet. Add one to get started!
        </p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b">
              <tr>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold">Description</th>
                <th className="text-right py-3 px-4 text-gray-700 font-semibold">Amount</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{transaction.description}</td>
                  <td className="py-3 px-4 text-right text-gray-800">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => removeTransaction(transaction.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
