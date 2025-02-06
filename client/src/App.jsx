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
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <UserList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;
