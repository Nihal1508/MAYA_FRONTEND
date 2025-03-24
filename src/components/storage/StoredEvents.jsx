import React, { useState, useEffect } from "react";


const EventName = ({ eventDetails }) => {
  return (
    <div className="bg-black rounded-xl p-6 flex justify-between items-center mb-6 shadow-lg">
      <div>
        <h2 className="text-2xl font-bold">{eventDetails.name}</h2>
        <p className="text-gray-400">{eventDetails.type}</p>
        <p className="text-gray-400">{eventDetails.date}</p>
      </div>
      <div className="text-gray-400 text-right">
        {eventDetails.totalSize} • {eventDetails.totalImages} Images
      </div>
    </div>
  );
};

export default EventName;
