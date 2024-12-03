import React from "react";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
           <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Help & Support</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Need assistance? We're here to help! Explore the guide below to resolve your queries and
          make the most out of the Expense Tracker app.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Getting Started</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Navigate to the <strong>Create Transaction</strong> page to add your expenses or income.</li>
          <li>Visit the <strong>Dashboard</strong> to view all your transactions in one place.</li>
          <li>Use the <strong>Remove</strong> button to delete unwanted transactions.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">1. How do I edit a transaction?</h3>
            <p className="text-gray-600">
              Currently, the app doesn't support editing transactions. You can remove the
              transaction and add it again with the updated details.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">2. Can I categorize my expenses?</h3>
            <p className="text-gray-600">
              Categorization is not available in this version but will be added in future updates.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">3. Is my data secure?</h3>
            <p className="text-gray-600">
              Yes, your data is stored locally on your device, ensuring complete privacy.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">Still Need Help?</h2>
        <p className="text-gray-700">
          If your issue isn't listed here, feel free to reach out to us at{" "}
          <a href="mailto:support@expensetracker.com" className="text-blue-500 underline">
            support@expensetracker.com
          </a>
          . Our team will get back to you within 24 hours.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Help;
