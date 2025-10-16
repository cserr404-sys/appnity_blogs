"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BlogCard from "@/components/BlogCard";
import { blogs as initialBlogs, Blog } from "@/blog";
import { toast } from "sonner";

export default function Home() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  const handleLike = (id: number) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, isLiked: !blog.isLiked, likes: blog.isLiked ? blog.likes - 1 : blog.likes + 1 } : blog
      )
    );
    const blog = blogs.find((b) => b.id === id);
    if (blog) {
      toast.success(blog.isLiked ? "Removed from Bookmarks" : "Added to Bookmarks");
    }
  };

  const handleBookmark = (id: number) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === id ? { ...blog, isBookmarked: !blog.isBookmarked } : blog))
    );
    const blog = blogs.find((b) => b.id === id);
    if (blog) {
        toast.success(blog.isBookmarked ? "Removed from Bookmarks" : "Added to Bookmarks");
      }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setLayout={setLayout} />
        <main className="flex-1 overflow-y-auto p-8">
          <div
            className={`grid gap-8 ${layout === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                layout={layout}
                onLike={handleLike}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
