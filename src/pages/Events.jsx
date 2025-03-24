import React from "react";
import Topbar from "../components/topbar";
import EventTile from "../components/events/EventTile";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {events} from "../data/data"

const Events = () => {
    const navigate = useNavigate();
    console.log(events)
    return (
        <div className="h-screen relative bg-[#121212] text-white p-6">
            <Topbar title="Events" />
            <div className="flex-wrap flex pt-5 gap-6 overflow-y-scroll scrollbar-custom w-full h-full pb-20">
                {events.map((event) => (
                    <EventTile event={event} />
                ))}
            </div>
            <button 
            onClick={()=> {
                navigate("/addevent")
            }}
            className="p-4 bg-purplePrimary rounded-2xl absolute bottom-10 right-10">
                <IoAddOutline size={25} />
            </button>
        </div>

    );
};

export default Events;
