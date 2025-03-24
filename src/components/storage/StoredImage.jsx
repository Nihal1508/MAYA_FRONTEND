import React, { useState } from "react";

const EventImages = () => {
  const [eventImages, setEventImages] = useState([
    { id: 1, src: "src/assets/images/raj3.jpeg" },
    { id: 2, src: "src/assets/images/raj4.jpg" },
    { id: 4, src: "src/assets/images/raj5.jpg" },
    { id: 5, src: "src/assets/images/lal2.jpg" },
    { id: 6, src: "src/assets/images/raj6.jpg" },
    { id: 7, src: "src/assets/images/mamooty2.jpg" },
    { id: 8, src: "src/assets/images/raj7.jpeg" },
    { id: 9, src: "src/assets/images/raj8.jpg" },
    { id: 10, src: "src/assets/images/event1.png" },
    { id: 11, src: "src/assets/images/raj9.jpg" },
    { id: 12, src: "src/assets/images/raj13.jpg" },
    { id: 13, src: "src/assets/images/raj14.jpg" },
    { id: 14, src: "src/assets/images/lal1.jpg" },
    { id: 15, src: "src/assets/images/mamooty1.jpeg" },
  ]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    const newImages = Array.from(files).map((file, index) => ({
      id: eventImages.length + index + 1,
      src: URL.createObjectURL(file),
    }));

    setEventImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {eventImages.map((image) => (
          <div
            key={image.id}
            className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt={`Event image ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Upload Button */}
      <div className="fixed bottom-6 right-6">
        <input
          type="file"
          id="imageUpload"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="imageUpload"
          className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 cursor-pointer inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default EventImages;
