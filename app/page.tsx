"use client";

import Sidebar from "./_layouts/Sidebar";
import Dashboard from "./_layouts/Dashboard";
import Report from "./_layouts/Report";

const Home = () => {
  return (
    <main className="flex justify-around w-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
      <Report />
    </main>
  );
};

export default Home;
