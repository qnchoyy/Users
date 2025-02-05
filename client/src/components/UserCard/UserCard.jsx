import React, { useState } from "react";
import UserModal from "../UserModal/UserModal";

const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg p-4 m-2 w-72 cursor-pointer hover:shadow-xl transition"
        onClick={() => setIsModalOpen(true)}
      >
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">@{user.username}</p>
        <p className="text-blue-500">{user.email}</p>
      </div>

      {isModalOpen && (
        <UserModal user={user} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default UserCard;
