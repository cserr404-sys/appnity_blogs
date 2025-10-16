export interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    authorImage: string;
    likes: number;
    isBookmarked: boolean;
    isLiked: boolean;
  }
  
  export const blogs: Blog[] = [
    {
      id: 1,
      title: "The Art of Minimalist Living",
      description: "Discover how to declutter your life and find joy in simplicity. A guide to living with less but better.",
      image: "/images/blog-1.jpg",
      author: "John Doe",
      authorImage: "/images/author-1.jpg",
      likes: 128,
      isBookmarked: false,
      isLiked: false,
    },
    {
      id: 2,
      title: "Mastering the Morning Routine",
      description: "Learn how to create a morning routine that sets you up for a productive and fulfilling day.",
      image: "/images/blog-2.jpg",
      author: "Jane Smith",
      authorImage: "/images/author-2.jpg",
      likes: 256,
      isBookmarked: true,
      isLiked: false,
    },
    {
      id: 3,
      title: "The Future of Remote Work",
      description: "An in-depth look at the trends and technologies shaping the future of remote and hybrid work environments.",
      image: "/images/blog-3.jpg",
      author: "Alex Johnson",
      authorImage: "/images/author-3.jpg",
      likes: 512,
      isBookmarked: false,
      isLiked: true,
    },
    {
      id: 4,
      title: "A Guide to Sustainable Fashion",
      description: "Learn how to make more conscious and eco-friendly choices when it comes to your wardrobe.",
      image: "/images/blog-4.jpg",
      author: "Emily White",
      authorImage: "/images/author-4.jpg",
      likes: 1024,
      isBookmarked: true,
      isLiked: true,
    },
    {
        id: 5,
        title: "The Power of Positive Thinking",
        description: "Change your mindset and change your life. A practical guide to harnessing the power of positive thinking.",
        image: "/images/blog-5.jpg",
        author: "Michael Brown",
        authorImage: "/images/author-5.jpg",
        likes: 345,
        isBookmarked: false,
        isLiked: false,
      },
      {
        id: 6,
        title: "Exploring the World on a Budget",
        description: "Travel doesn't have to be expensive. Discover tips and tricks for exploring the world without breaking the bank.",
        image: "/images/blog-6.jpg",
        author: "Sarah Green",
        authorImage: "/images/author-6.jpg",
        likes: 678,
        isBookmarked: true,
        isLiked: false,
      },
      {
        id: 7,
        title: "The Rise of Plant-Based Diets",
        description: "A look into the health benefits and environmental impact of plant-based eating, with tips for getting started.",
        image: "/images/blog-7.jpg",
        author: "David Clark",
        authorImage: "/images/author-7.jpg",
        likes: 890,
        isBookmarked: false,
        isLiked: true,
      },
      {
        id: 8,
        title: "Financial Freedom for Creatives",
        description: "A guide for artists, writers, and other creatives on how to manage their finances and achieve financial independence.",
        image: "/images/blog-8.jpg",
        author: "Jessica Martinez",
        authorImage: "/images/author-8.jpg",
        likes: 1234,
        isBookmarked: true,
        isLiked: true,
      },
  ];
