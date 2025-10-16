"use client";

import { useState, useEffect } from "react";
import {
  LayoutGrid,
  Home,
  Rss,
  PlusSquare,
  Bell,
  UserCircle,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Shield,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toast.success(`Theme changed to ${theme === "dark" ? "light" : "dark"} mode`);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Sidebar for larger screens */}
      <motion.div
        className="hidden md:flex flex-col w-64 bg-card text-card-foreground border-r border-border"
        initial={false}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-xl font-bold">My App</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <Home />
              <span>Home</span>
          </Link>
          <Link href="/feed" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <Rss />
              <span>Feed</span>
          </Link>
          <Link href="/postblog" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <PlusSquare />
              <span>Post Blog</span>
          </Link>
          <Link href="/notifications" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <Bell />
              <span>Notifications</span>
          </Link>
          <Link href="/profile" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <UserCircle />
              <span>Profile</span>
          </Link>
          <Link href="/dashboard" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <LayoutGrid />
              <span>Dashboard</span>
          </Link>
          <Link href="/settings" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <Settings />
              <span>Settings</span>
          </Link>
           <Link href="/admin" className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
              <Shield />
              <span>Admin</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-full p-2 rounded-md hover:bg-accent"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </motion.div>

      {/* Sidebar for mobile screens */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="fixed z-50 p-2 rounded-md top-4 left-4 bg-card text-card-foreground"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-card text-card-foreground"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h1 className="text-xl font-bold">My App</h1>
                <button onClick={toggleSidebar}>
                  <X />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                <Link href="/" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <Home />
                    <span>Home</span>
                </Link>
                <Link href="/feed" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <Rss />
                    <span>Feed</span>
                </Link>
                <Link href="/postblog" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <PlusSquare />
                    <span>Post Blog</span>
                </Link>
                <Link href="/notifications" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <Bell />
                    <span>Notifications</span>
                </Link>
                <Link href="/profile" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <UserCircle />
                    <span>Profile</span>
                </Link>
                <Link href="/dashboard" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <LayoutGrid />
                    <span>Dashboard</span>
                </Link>
                <Link href="/settings" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <Settings />
                    <span>Settings</span>
                </Link>
                <Link href="/admin" onClick={toggleSidebar} className="flex items-center p-2 space-x-2 rounded-md hover:bg-accent">
                    <Shield />
                    <span>Admin</span>
                </Link>
              </nav>
              <div className="p-4 border-t border-border">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full p-2 rounded-md hover:bg-accent"
                >
                  {theme === "dark" ? <Sun /> : <Moon />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Sidebar;
