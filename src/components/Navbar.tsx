import Image from "next/image";
const Navbar = () => {
  return (
    <header className="flex p-4 justify-end md:justify-between items-center">
      {/* search bar section */}
      <div className="hidden md:flex gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-2">
        <Image src="/search.png" alt="search icon" width={15} height={15} />
        <input
          type="text"
          placeholder="Search..."
          className="w-50  bg-transparent outline-none"
        />
      </div>

      {/* icons and user section */}
      <div className="flex md:gap-6 gap-4 items-center">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message icon" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="message icon"
          />
          <div className="w-5 h-5 flex items-center justify-center bg-purple-500 absolute -top-3 -right-3 text-white rounded-full text-xs font-semibold">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Bashir Kayani</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          width={35}
          height={35}
          alt="person icon"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
