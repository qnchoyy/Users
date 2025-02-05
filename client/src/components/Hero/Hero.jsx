import React from "react";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative py-14 lg:pt-10 lg:pb-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
          <h1 className="font-bold text-4xl leading-snug sm:text-5xl text-center mb-5 text-black dark:text-white">
            User Profiles
          </h1>
          <p className="text-xl font-medium leading-8 text-gray-600 dark:text-gray-300 text-center mb-14 max-w-xl mx-auto">
            Discover and connect with people from around the world. Browse user
            profiles, explore interests, and find the right connections easily.
          </p>

          <div className="flex flex-col sm:flex-row items-center max-w-xl mx-auto justify-center gap-y-4 sm:justify-between pr-2 sm:pr-1 sm:bg-white dark:sm:bg-gray-800 rounded-full mb-5 border border-transparent border-indigo-600 focus-within:border-indigo-600 transition-all duration-300">
            <input
              type="text"
              className="w-full px-6 py-3.5 text-base text-gray-900 dark:text-white bg-transparent  rounded-full placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none text-center sm:text-left"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or nickname..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
