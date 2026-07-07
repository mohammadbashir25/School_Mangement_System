import Announcement from "@/components/Announcement";
import AttendenceChart from "@/components/AttendenceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const page = () => {
  return (
    <div className="p-4 box-border flex gap-5">
      {/* left section of main content */}
      <div className="lg:w-2/3 w-full flex flex-col gap-8">
        {/* userCard */}
        <div className="flex justify-between rounded-2xl gap-4 flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        {/* chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-112">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="lg:w-2/3 w-full h-112 ">
            <AttendenceChart />
          </div>
        </div>
        <div className="w-full h-125">
          <FinanceChart />
        </div>
      </div>
      {/* right section of main content */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8 ">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
