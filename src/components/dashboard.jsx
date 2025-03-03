import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import LineChart from "./Linechart";
import Donut2 from "../assets/images/2donut.png";

export default function Dashboard() {
    return (
        <div className="max-h-screen flex bg-black text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Topbar */}
                <Topbar title="DashBoard" />

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex  bg-[#ffffff11] rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Turn Moments into Memories with Maya</h3>
                        <img src={Donut2} alt="2donut" className="w-full" />
                    </div>
                    <div className="bg-[#ffffff11] rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Storage</h3>
                        <p>Total: <strong>10 GB</strong></p>
                        <p>Clustered: <strong>287,344 images</strong></p>
                    </div>
                    
                </div>

                {/* Events Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#ffffff11] rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Events</h3>
                        <p className="mb-2">Now happening:</p>
                        <p className="bg-[#ffffff11] p-3 rounded-lg mb-4">Arcane Hackathon</p>
                        <p>Upcoming events:</p>
                        <ul>
                            <li className="bg-[#ffffff11] p-3 rounded-lg mb-2">Travencore Hub Meet</li>
                            <li className="bg-[#ffffff11] p-3 rounded-lg">Malabar Hub Meet</li>
                        </ul>
                    </div>
                    <div className="bg-[#ffffff11] rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Platform Usage</h3>
                        <p>Users: <strong>310</strong> <span className="text-green-500">+15%</span></p>
                        <div className="w-full h-40">
                            <LineChart />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
