import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">About Expense Tracker</h1>
        <p className="text-lg text-gray-700 mb-6">
          The **Expense Tracker** app is your go-to solution for managing your daily finances
          effectively. With an intuitive design and easy-to-use features, you can keep track of all
          your expenses and income in one place.
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Why Use Expense Tracker?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Keep a detailed record of your transactions.</li>
          <li>Analyze your spending habits effortlessly.</li>
          <li>Access your financial data anytime, anywhere.</li>
          <li>Simple and user-friendly interface for all users.</li>
        </ul>
        <div className="mt-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Our Goal</h3>
          <p className="text-gray-600">
            To empower individuals to take control of their finances and build better financial
            habits for a more secure future.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
