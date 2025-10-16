"use client";

import { Blog } from "@/blog";
import { motion } from "framer-motion";
import { Heart, Bookmark } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface BlogCardProps {
  blog: Blog;
  layout: "grid" | "list";
  onLike: (id: number) => void;
  onBookmark: (id: number) => void;
}

const BlogCard = ({ blog, layout, onLike, onBookmark }: BlogCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (layout === "grid") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-muted-foreground mb-4">{blog.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onLike(blog.id)}
                className={`flex items-center space-x-1 ${blog.isLiked ? "text-red-500" : ""}`}>
                <Heart />
                <span>{blog.likes}</span>
              </button>
              <button onClick={() => onBookmark(blog.id)}>
                <Bookmark className={`${blog.isBookmarked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden flex"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={300}
        height={200}
        className="w-1/3 object-cover"
      />
      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-muted-foreground mb-4">{blog.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLike(blog.id)}
              className={`flex items-center space-x-1 ${blog.isLiked ? "text-red-500" : ""}`}>
              <Heart />
              <span>{blog.likes}</span>
            </button>
            <button onClick={() => onBookmark(blog.id)}>
              <Bookmark className={`${blog.isBookmarked ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
