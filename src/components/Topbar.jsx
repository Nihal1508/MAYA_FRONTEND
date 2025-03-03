import React, { useState } from "react";
import AdminRequestsPopup from "./AdminRequestsPopup";
import searchIcon from '../assets/images/search.png';
import adminsIcon from '../assets/images/adminsno.png';
import bellIcon from '../assets/images/bell.png';
import profileIcon from '../assets/images/profile.png';

const Topbar = ({ title }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAdminsClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="flex justify-between items-center mb-10 ">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-white text-sm  text-left">30th Jan 2025</p>
      </div>
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <button className="focus:outline-none">
          <img src={searchIcon} alt="Search" className="w-5 h-5 hover:opacity-75" />
        </button>

        {/* Admins Button (Triggers Popup) */}
        <button onClick={handleAdminsClick} className="focus:outline-none">
          <img src={adminsIcon} alt="Add Admins" className="w-10 h-10 hover:opacity-75" />
        </button>

        {/* Notifications Button */}
        <button className="focus:outline-none">
          <img src={bellIcon} alt="Notifications" className="w-10 h-10 hover:opacity-75" />
        </button>

        {/* Profile Button */}
        <button className="focus:outline-none">
          <img src={profileIcon} alt="Profile" className="w-10 h-10 rounded-halfs hover:opacity-75" />
        </button>
      </div>

      {showPopup && <AdminRequestsPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Topbar;