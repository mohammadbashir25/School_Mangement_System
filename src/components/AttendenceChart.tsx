"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  { name: "Sat", Present: 100, Absent: 10 },
  { name: "Sun", Present: 98, Absent: 12 },
  { name: "Mon", Present: 60, Absent: 50 },
  { name: "Tue", Present: 70, Absent: 40 },
  { name: "Wed", Present: 100, Absent: 10 },
  { name: "Thu", Present: 90, Absent: 20 },
  { name: "Fri", Present: 105, Absent: 5 },
];

const AttendanceChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="w-[98%] h-full bg-surface p-4 rounded-2xl"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-display font-semibold text-xl text-ink">
          Attendance
        </h1>
        <motion.button
          type="button"
          aria-label="More options"
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </motion.button>
      </div>
      <BarChart
        style={{
          width: "100%",
          height: "90%",
          aspectRatio: 1.618,
        }}
        data={data}
        barSize={20}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#E4E1EF"
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: "#8B95A1" }}
          tickLine={false}
        />
        <YAxis
          width="auto"
          axisLine={false}
          tick={{ fill: "#8B95A1" }}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "#EDE9F7" }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
        />
        <Bar
          dataKey="Present"
          fill="#4C8C74"
          radius={[10, 10, 0, 0]}
          legendType="circle"
          animationBegin={200}
          animationDuration={900}
          animationEasing="ease-out"
        />
        <Bar
          dataKey="Absent"
          fill="#C1483F"
          radius={[10, 10, 0, 0]}
          legendType="circle"
          animationBegin={350}
          animationDuration={900}
          animationEasing="ease-out"
        />
      </BarChart>
    </motion.div>
  );
};

export default AttendanceChart;
