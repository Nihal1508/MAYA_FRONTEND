import React from "react";

const AdminRequestsPopup = ({ onClose }) => {
  const adminRequests = [
    { name: "Nived G", email: "nivedganga@gmail.com" },
    { name: "Noel Paul George", email: "noelpaulgeorge@gmail.com" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Admin Requests</h2>

        {adminRequests.map((admin, index) => (
          <div key={index} className="flex justify-between items-center border-b border-gray-700 py-3">
            <div>
              <p className="font-medium">{admin.name}</p>
              <p className="text-gray-400 text-sm">{admin.email}</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-[#ffffff11] rounded hover:bg-gray-700">Deny</button>
              <button className="px-3 py-1 bg-purple-500 rounded hover:bg-purple-600">Accept</button>
            </div>
          </div>
        ))}

        {/* View All Button */}
        <div className="mt-4">
          <button className="w-full py-2 bg-gray-800 rounded hover:bg-gray-700">View all ▼</button>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          ✖
        </button>
      </div>
    </div>
  );
};

export default AdminRequestsPopup;
