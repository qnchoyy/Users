import React from "react";

const UserModal = ({ user, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-black font-bold">{user.name}</h2>
        <p className="text-gray-500">@{user.username}</p>
        <p className="text-gray-700">📧 {user.email}</p>
        <p className="text-gray-700">📞 {user.phone}</p>
        <p className="text-gray-700">🏢 {user.company.name}</p>

        <button
          onClick={closeModal}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
