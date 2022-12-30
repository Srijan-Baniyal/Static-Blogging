import { NextPage } from "next";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [posts, setPosts] = useState<
    { title: string; slug: string; meta: string }[]
  >([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts").then((data) => data.json());
    setPosts(res.;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((posts) => (
        <BlogCard title={posts.title} description={posts.meta} />
      ))}
    </div>
  );
};
export default Blogs;