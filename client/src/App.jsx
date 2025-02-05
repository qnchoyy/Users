import React, { useState } from "react";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">User Profiles</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Търси по име или псевдоним..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg w-80"
        />
      </div>

      <UserList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
