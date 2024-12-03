import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  // Load initial transactions from localStorage
  const getInitialTransactions = () => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };

  const [transactions, setTransactions] = useState(getInitialTransactions);

  // Update localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to remove a transaction
  const removeTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useExpenseContext = () => useContext(ExpenseContext);
