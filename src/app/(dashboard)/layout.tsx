import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-screen flex">
    {/* left side */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] max-h-screen overflow-auto">
        <Menu />
    </div>
    
    {/* right side */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-auto bg-[#f7f8fa]">
        <Navbar />
        {children}
    </div>
  
  </div>;
};

export default DashboardLayout;
