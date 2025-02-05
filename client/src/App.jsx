import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import HeroSection from "./components/Hero/Hero";
import Header from "./components/Header/Header";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <Header />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* <div className="flex justify-center relative mb-6">
        <h1 className="text-3xl font-bold">User Profiles</h1>
        <div className="absolute right-0">
          <ThemeToggle />
        </div>
      </div> */}

      {/* <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or nickname..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <UserList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;
