import React from "react";

const EventDetails = ({ name, type, date, admins }) => {
  return (
    <div className="bg-[#ffffff11] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-400">{type}</p>
      <p className="text-gray-500 text-sm mb-4">{date}</p>

      <p className="text-gray-400 mb-1">Assigned admins</p>
      <p className="text-gray-500 text-sm">{admins}</p>
    </div>
  );
};

export default EventDetails;
