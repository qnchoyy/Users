import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";

const UserList = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error loading users", error));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p className="text-gray-500 dark:text-gray-300 text-center col-span-full">
          No users found.
        </p>
      )}
    </>
  );
};

export default UserList;
