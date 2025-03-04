import React from "react";
import Topbar from "../components/topbar";
import Event1 from "../assets/images/event1.png";
import EventTile from "../components/events/EventTile";
import StorageTile from "../components/storage/StorageTile";

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
];

const Storage = () => {

  return (
    <div className="h-screen bg-[#121212] text-white p-6">
      <Topbar title="Storage" />

      <div className="flex-wrap flex pt-5 gap-6 overflow-y-scroll scrollbar-custom w-full h-full pb-20">
        {events.map((event) => (
          <StorageTile event={event} />
        ))}
      </div>
    </div>

  );
};

export default Storage;
