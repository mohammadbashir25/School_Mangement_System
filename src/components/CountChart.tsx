"use client";

import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import Image from "next/image";
import { motion } from "framer-motion";

type CountChartProps = {
  boys?: number;
  girls?: number;
};

const useCountUp = (target: number, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let frame: number;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const legendItemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 22 },
  },
};

const CountChart = ({ boys = 60, girls = 50 }: CountChartProps) => {
  const total = boys + girls;
  const boysPct = total ? Math.round((boys / total) * 100) : 0;
  const girlsPct = total ? 100 - boysPct : 0;

  const boysCount = useCountUp(boys);
  const girlsCount = useCountUp(girls);

  const data = [
    { name: "Total", count: total, fill: "white" },
    { name: "Boys", count: boys, fill: "#BFE3F7" },
    { name: "Girls", count: girls, fill: "#F3C987" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="rounded-xl h-full w-full p-4"
    >
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-display font-semibold text-ink">Students</h1>
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

      {/* chart */}
      <div className="w-full h-[75%] relative">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1.618,
          }}
          cx="50%"
          barSize={32}
          innerRadius="40%"
          outerRadius="100%"
          data={data}
        >
          <RadialBar
            label={{ position: "center", fill: "white" }}
            background
            dataKey="count"
            cornerRadius={16}
            animationBegin={200}
            animationDuration={1100}
            animationEasing="ease-out"
          />

        </RadialBarChart>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/maleFemale.png"
              width={65}
              height={65}
              alt="Boys and girls ratio"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* bottom legend */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-16"
      >
        <motion.div
          variants={legendItemVariants}
          className="flex gap-1 flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: "#BFE3F7" }}
          />
          <h1 className="font-bold text-ink">{boysCount.toLocaleString()}</h1>
          <h2 className="text-xs text-muted">Boys ({boysPct}%)</h2>
        </motion.div>
        <motion.div
          variants={legendItemVariants}
          className="flex gap-1 flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: "#F3C987" }}
          />
          <h1 className="font-bold text-ink">{girlsCount.toLocaleString()}</h1>
          <h2 className="text-xs text-muted">Girls ({girlsPct}%)</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CountChart;