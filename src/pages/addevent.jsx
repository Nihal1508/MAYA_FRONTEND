import React, { useState } from "react";
import Topbar from "../components/topbar";
import { useNavigate } from "react-router-dom";
import { Loader, Loader2, UserIcon } from "lucide-react";
import {events} from "../data/data"
const AddEvent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    setLoading(true);
    events.concat({
      id: 1,
      name: "Prithviraj Sukumaran",
      date: "30th January 2025",
      description: "Test1",
      storage: "20mb",
      images: "15",
      imageSrc: "../assets/images/Event2.jpg",
  })
  console.log(events)
    setInterval(()=>{
      setLoading(false)
      navigate('/events')
    },3000)
  };
  const [imagePreview, setImagePreview] = useState(null);
  const [loading,setLoading] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen bg-[#121212] text-white w-full p-6 relative">
    
      <Topbar title="Manage Events" />
      <div className="h-full overflow-y-scroll p-8 pb-20 scrollbar-custom">
      {
        loading?<div className="w-screen h-screen absolute left-0 bg-[#000000af] z-10">
        <Loader2 className="animate-spin size-12 ml-[630px] mt-[300px]" />
      </div>:<div></div>
      }
        <form className="space-y-6 h-fit text-left">
          <div className="">
            <label className="block text-gray-400 mb-1">Title*</label>
            <input
              type="text"
              placeholder="Event Title"
              className="w-7/12 p-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Subtitle</label>
            <input
              type="text"
              placeholder="Subtitle"
              className="w-7/12 p-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Start Date*</label>
            <input
              type="date"
              className="w-fit p-2 rounded border border-gray-600 bg-transparent placeholder:text-gray-200 text-white focus:outline-none focus:ring focus:ring-purple-500 [&::-webkit-calendar-picker-indicator]:invert"
              style={{ color: "gray" }}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">End Date</label>
            <input
              type="date"
              className="w-fit p-2 rounded border border-gray-600 bg-transparent placeholder:text-gray-200 text-white focus:outline-none focus:ring focus:ring-purple-500 [&::-webkit-calendar-picker-indicator]:invert"
              style={{ color: "gray" }}
            />
          </div>

          <div
  className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer"
  onClick={() => document.getElementById("file-input").click()} // Trigger file input click
>
  <p className="text-gray-400 mb-2">Add Cover Image</p>
  <img
    src="src/assets/images/galleyicon.png"
    alt="Placeholder"
    className="mx-auto w-12 h-12 mb-2"
  />
  <p className="text-sm text-gray-500">
    Drop images here, or{" "}
    <span className="text-purple-500 cursor-pointer">browse</span>
  </p>
  <p className="text-sm text-gray-500">Supports: JPEG, PNG, WEBP, HEVC</p>

  {/* Hidden file input */}
  <input
    id="file-input"
    type="file"
    accept=".jpeg, .jpg, .png, .webp, .hevc" // Specify accepted file types
    className="hidden" // Hide the input visually
    onChange={handleImageChange}
  />
</div>
{imagePreview && (
            <div className="mt-4 text-center">
              <p className="text-gray-400">Image Preview:</p>
              <img src={imagePreview} alt="Preview" className="mx-auto w-40 h-40 rounded-lg border border-gray-600" />
            </div>
          )}
          <div className="hidden">
            <label className="block text-gray-400 mb-1"></label>
            <input
              type="text"
              placeholder="Add Admins"
              className="w-7/12 p-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;