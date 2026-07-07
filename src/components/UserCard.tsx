import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-32">
      <div className="flex justify-between items-center">
        <span className="text-[11px] bg-white px-2 rounded-full text-green-600">2026/4/30</span>
        <Image src='/more.png' height={20} width={20} alt="more icon" className="cursor-pointer transition-transform duration-200 hover:rotate-90"/>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <span className="capitalize text-sm font-medium text-gray-500">{type}</span>
      </div>
    </div>
  );
};

export default UserCard;
