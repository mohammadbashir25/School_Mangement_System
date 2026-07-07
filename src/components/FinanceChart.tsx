"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 10000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 11000, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3490, expense: 4300 },
  { name: "Sep", income: 3490, expense: 4300 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 3490, expense: 4300 },
  { name: "Dec", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="bg-surface p-4 rounded-2xl h-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-display font-semibold text-xl text-ink">Finance</h1>
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
      <LineChart
        style={{ width: "100%", height: "90%", aspectRatio: 1.618 }}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E4E1EF" />
        <XAxis dataKey="name" stroke="#8B95A1" axisLine={false} tickMargin={10}/>
        <YAxis width="auto" stroke="#8B95A1" tickMargin={20} axisLine={false} />
        <Tooltip
          cursor={{ stroke: "#EDE9F7" }}
          contentStyle={{
            backgroundColor: "#FFFFFF",
            borderColor: "#EDE9F7",
            borderRadius: "10px",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#5B4B8A"
          strokeWidth={2}
          dot={{ fill: "#5B4B8A", r: 3 }}
          activeDot={{ r: 8, stroke: "#FFFFFF", strokeWidth: 2 }}
          animationDuration={1200}
          animationEasing="ease-out"
          strow
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#D98F3C"
          strokeWidth={2}
          dot={{ fill: "#D98F3C", r: 3 }}
          activeDot={{ r: 8, stroke: "#FFFFFF", strokeWidth: 2 }}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </LineChart>
    </motion.div>
  );
};

export default FinanceChart;
