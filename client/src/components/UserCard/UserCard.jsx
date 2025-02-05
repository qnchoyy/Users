import React, { useState } from "react";
import UserModal from "../UserModal/UserModal";

const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-64 h-60 mx-auto bg-white dark:bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-400 text-sm">
            {user.username}
          </span>
        </div>
        <div className="mt-8">
          <h2 className="text-gray-900 dark:text-white font-bold text-2xl tracking-wide">
            {user.name}
          </h2>
        </div>
        <p className="text-blue-600 dark:text-emerald-400 font-semibold mt-2.5">
          {user.email}
        </p>
        <p className="text-blue-600 dark:text-emerald-400 font-semibold mt-2.5">
          Street: {user.address.street}
        </p>
      </section>

      {isModalOpen && (
        <UserModal user={user} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default UserCard;
