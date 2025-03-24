import React from "react";
import Topbar from "../components/topbar";
import Event1 from "../assets/images/Event2.jpg";
import EventTile from "../components/events/EventTile";
import StorageTile from "../components/storage/StorageTile";

const events = [
  {
     id: 1,
     name: "Prithviraj Sukumaran",
     date: "30th January 2025",
     description: "Test1",
     storage: "20mb",
     images: "15",
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
