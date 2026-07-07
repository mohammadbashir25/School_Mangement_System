"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type sideBar = {
  title: string;
  items: sideItems[];
};
type sideItems = {
  icon: string;
  label: string;
  href: string;
  visible: string[];
};

const menuItems: sideBar[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

// Whole sidebar fades/slides in, then each section staggers its items in behind it.
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: -6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 26 },
  },
};

const Menu = () => {
  const pathname = usePathname();

  return (
    <motion.div
      className="text-sm px-2"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {menuItems.map((section) => (
        <motion.div
          key={section.title}
          variants={sectionVariants}
          className="flex flex-col gap-1 mb-2"
        >
          <span className="hidden lg:block text-gray-400 font-light text-xs tracking-widest uppercase my-4">
            {section.title}
          </span>
          {section.items.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
            const isLogout = link.label === "Logout";

            return (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={`relative flex items-center justify-center lg:justify-start gap-4 rounded-md py-2 lg:py-1.5 px-2 transition-colors overflow-hidden ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  } ${isLogout ? "hover:text-red-500" : "hover:text-blue-600"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 bg-blue-50 rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <motion.span
                    className="relative z-10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.18, rotate: -6 }}
                    whileTap={{ scale: 0.88 }}
                    transition={{ type: "spring", stiffness: 420, damping: 10 }}
                  >
                    <Image
                      src={link.icon}
                      width={20}
                      height={20}
                      alt={`${link.label} Icon`}
                    />
                  </motion.span>
                  <span className="relative z-10 hidden lg:block">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Menu;
