import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Event1 from "../assets/images/event1.png";
import Event2 from "../assets/images/event2.png";
import Event3 from "../assets/images/event3.png";

const events = [
  {
    id: 1,
    name: "Anand & Radhika",
    date: "1 Oct 2024",
    description: "Reception",
    storage: "2.3 GB",
    images: "38734 images",
    imageSrc: Event1,
  },
  {
    id: 2,
    name: "IBM",
    date: "12 Sept 2024",
    description: "International Gen AI Conclave",
    imageSrc: Event2,
  },
  {
    id: 3,
    name: "KTX",
    date: "20 Aug 2024",
    description: "Global",
    imageSrc: Event3,
  },
];

const Storage = () => {
  console.log("Event1 Path:", Event1);
  console.log("Event2 Path:", Event2);
  console.log("Event3 Path:", Event3);

  return (
    <div className="max-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 p-10">
      <Topbar title="Storage" />

        {/* Events */}
        <div className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group cursor-pointer bg-gray-700 bg-cover bg-center rounded-lg overflow-hidden w-full h-48 flex items-end p-4"
              style={{ backgroundImage: `url(${event.imageSrc})` }}
            >
              <div className="bg-black bg-opacity-50 p-2 rounded-lg w-full">
                <p className="text-lg font-semibold">{event.name}</p>
                <p className="text-sm">{event.description}</p>
                {event.storage && (
                  <p className="text-sm">
                    {event.storage}, {event.images}
                  </p>
                )}
                <p className="text-sm mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storage;
