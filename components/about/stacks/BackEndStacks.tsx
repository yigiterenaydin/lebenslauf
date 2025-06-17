"use client";

import { FaUtensils, FaSwimmer, FaCamera, FaTree, FaMusic, FaWalking, FaFileExcel, FaFileWord } from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { FiCode } from "react-icons/fi";
import { toast } from "react-hot-toast";

export const BackEndStacks = () => {
  const hobbies = [
    { title: "Kochen", icon: <FaUtensils size={28} /> },
    { title: "Kung-Fu", icon: <MdSportsMartialArts size={28} /> },
    { title: "Schwimmen", icon: <FaSwimmer size={28} /> },
    { title: "Musik hören", icon: <FaMusic size={28} /> },
    { title: "Natur", icon: <FaTree size={28} /> },
    { title: "Fotografieren", icon: <FaCamera size={28} /> },
    { title: "Reisen", icon: <FaWalking size={28} /> },
    { title: "Word", icon: <FaFileWord size={28} /> },
    { title: "Excel", icon: <FaFileExcel size={28} /> },
    { title: "Programmieren", icon: <FiCode size={28} /> },
  ];

  const onHandleClick = (title: string) => {
    toast.success(`${title} ausgewählt`, {
      icon: "🎯",
      style: {
        border: "1px solid #3e3e3e",
        background: "#fff",
        color: "#222",
      },
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 w-full">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="flex flex-col items-center p-5 border border-gray-700 bg-gray-900 rounded-xl shadow cursor-pointer hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
          onClick={() => onHandleClick(hobby.title)}
        >
          <div className="text-2xl text-white">{hobby.icon}</div>
        </div>
      ))}
    </div>
  );
};