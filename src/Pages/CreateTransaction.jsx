import { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const CreateTransaction = () => {
  const { addTransaction } = useExpenseContext();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addTransaction({ id: Date.now(), description, amount: parseFloat(amount) });
    setDescription("");
    setAmount("");
    navigate("/dashboard");
  };

  return (
    <div className="container mx-auto p-6 mt-[10%]">
      <h2 className="text-3xl font-bold text-center mb-6">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-md">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
