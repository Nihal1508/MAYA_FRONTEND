import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

const adminRequests = [
  { id: 1, name: "Nived G", email: "nivedganga@gmail.com" },
  { id: 2, name: "Noel Paul George", email: "noelpaulgeorge@gmail.com" },
];

const admins = [
  { id: 1, name: "Shaniya N", email: "shaniyanaeem2003@gmail.com" },
  { id: 2, name: "Nihal Muhammed Riyaz", email: "nihalmuhammedriyaz@gmail.com" },
];

const ManageAdmins = () => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Topbar title="Manage Admins" />

        <h2 className="text-3xl font-semibold">Manage Admins</h2>
        <p className="text-gray-400">20th Oct 2024</p>

        {/* Invite Admin Section */}
        <div className="bg-[#161616] p-6 mt-6 rounded-xl">
          <h3 className="text-xl font-medium">Invite admin</h3>
          <input
            type="email"
            placeholder="Email id"
            className="mt-2 w-full bg-[#ffffff11] p-2 rounded text-white"
          />
          <button className="mt-4 bg-purple-500 text-white w-full py-2 rounded">Invite</button>
        </div>

        {/* Admin Requests Section */}
        <div className="bg-[#161616] p-6 mt-6 rounded-xl">
          <h3 className="text-xl font-medium">Admin Requests</h3>
          {adminRequests.map((request) => (
            <div key={request.id} className="flex justify-between items-center mt-4 border-b border-gray-700 pb-3">
              <div>
                <p className="font-medium">{request.name}</p>
                <p className="text-gray-400 text-sm">{request.email}</p>
              </div>
              <div className="flex space-x-2">
                <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded">Deny</button>
                <button className="bg-white text-black px-4 py-2 rounded">Accept</button>
              </div>
            </div>
          ))}
          <p className="text-gray-400 text-sm mt-4 cursor-pointer">View More ⌄</p>
        </div>

        {/* Admins Section */}
        <div className="bg-[#161616] p-6 mt-6 rounded-xl">
          <h3 className="text-xl font-medium">Admins</h3>
          {admins.map((admin) => (
            <div key={admin.id} className="flex justify-between items-center mt-4 border-b border-gray-700 pb-3">
              <div>
                <p className="font-medium">{admin.name}</p>
                <p className="text-gray-400 text-sm">{admin.email}</p>
              </div>
              <button className="text-gray-400 hover:text-white">➖</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;
