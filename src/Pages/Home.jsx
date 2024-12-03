// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-xl mb-8">Discover amazing content and features.</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300" onClick={()=>{
            navigate("/create")
        }}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold mb-6">Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold mb-2">Add You Expensces</h3>
            <p>Just Add Your Expences With Description😊</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold mb-2">See The DashBoard</h3>
            <p>This DashBoard Contain's All You Transaction Detail's 🤑</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold mb-2">Trace Your Expences!</h3>
            <p>From This Website Trace Your Daily or Weekly or  Monthly or Yearly Expeceses With Description✅ </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
