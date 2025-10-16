"use client";

import { Bell, Search, UserCircle, LayoutGrid, List } from "lucide-react";

interface HeaderProps {
  setLayout: (layout: "grid" | "list") => void;
}

const Header = ({ setLayout }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 bg-card text-card-foreground border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 pl-8 border rounded-md bg-background border-border"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setLayout("grid")}>
          <LayoutGrid />
        </button>
        <button onClick={() => setLayout("list")}>
          <List />
        </button>
        <Bell className="cursor-pointer" />
        <UserCircle className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
