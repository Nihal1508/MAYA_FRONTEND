import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import AdminRequestsListItem from '../dashboard/AdminRequestsListItem'
const adminRequests = [
    { id: 1, name: "Nived G", email: "nivedganga@gmail.com" },
    { id: 2, name: "Noel Paul George", email: "noelpaulgeorge@gmail.com" },
];

function AdminRequests() {
    return (
        <div className="bg-[#0B0B0B] px-10 pt-10 pb-4 mt-6 rounded-2xl text-left">
            <h3 className="text-xl font-medium mb-5">Admin Requests</h3>
            {adminRequests.map((request) => (
                <AdminRequestsListItem key={request.id} request={request} />
            ))}
            <div className="flex justify-center">
                <button className="text-gray-400
             text-sm mt-2 items-center px-10 py-2 flex cursor-pointer">
                    View More <MdKeyboardDoubleArrowDown size={20} color="#ffffff" />
                </button>
            </div>
        </div>
    )
}

export default AdminRequests
