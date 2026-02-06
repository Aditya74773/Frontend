import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  // destructuring currentUser from user in state
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="h-20 bg-blue-900 flex items-center justify-between px-20">

      {/* Left section */}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-3xl"
          src="data:image/jpeg;base64,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"
          alt="logo-1"
        />

        <p className="text-white font-semibold">
          {currentUser?.email}
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <input
          className="bg-white p-2 border-2 rounded-lg outline-none border-black"
          type="text"
          placeholder="Search"
        />

        <IoIosNotificationsOutline
          className="text-white text-3xl cursor-pointer"
        />

        <h1 className="text-white font-semibold text-lg">
          LinkedIn
        </h1>

        <img
          className="w-10 h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCxXGfy-Of_tyL0ydm286nGxIS1_1gzsNIw&s"
          alt="linkedin_logo"
        />
      </div>

    </div>
  );
};

export default Navbar;
