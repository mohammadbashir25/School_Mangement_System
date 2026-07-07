"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Events = {
  id: number;
  title: string;
  time: string;
  description: string;
};

//  TEMPRORAY EVENTS
const events: Events[] = [
  {
    id: 1,
    title: "Team Meeting",
    time: "09:00 AM",
    description:
      "Weekly team sync to discuss progress, tasks, and upcoming goals.",
  },
  {
    id: 2,
    title: "Project Launch",
    time: "11:30 AM",
    description:
      "Official launch of the new product with the development and marketing teams.",
  },
  {
    id: 3,
    title: "Client Presentation",
    time: "02:00 PM",
    description:
      "Presenting the project updates and new features to the client.",
  },
];

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  const handleChange = (value: Value) => {
    setValue(value);
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={handleChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Event</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:bg-skyLight even:bg-purpleLight"
            key={e.id}
          >
            <div className="flex items-center justify-between flex-col">
              <div className="flex justify-between w-full">
                <h1 className="font-semibold text-gray-600">{e.title}</h1>
                <span className="text-xs text-gray-600">{e.time}</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
