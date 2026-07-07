type Announcement = {
  id: number;
  title: string;
  time: string;
  description: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    title: "System Maintenance",
    time: "08:00 AM",
    description:
      "The system will be temporarily unavailable due to scheduled maintenance.",
  },
  {
    id: 2,
    title: "New Feature Release",
    time: "12:30 PM",
    description:
      "We are excited to introduce new dashboard features for better performance tracking.",
  },
  {
    id: 3,
    title: "Holiday Notice",
    time: "All Day",
    description: "Office will remain closed on Friday due to a public holiday.",
  },
];

const Announcement = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcement</h1>
        <span className="texr-xs text-gray-400">View All</span>
      </div>
      {announcements.map((announcement) => (
        <div className="flex gap-4 flex-col mt-4" key={announcement.id}>
          <div className="p-4 bg-skyLight odd:bg-yellowLight rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{announcement.title}</h1>
              <span className="text-xs text-gray-400 bg-white py-1 px-1 rounded-md">{announcement.time}</span>
            </div>
            <p className="text-base mt-1 text-gray-500">{announcement.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
