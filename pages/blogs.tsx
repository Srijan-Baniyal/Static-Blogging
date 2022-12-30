import { NextPage } from "next";
import BlogCard from "../components/BlogCard";

interface Props {}

const blogs: NextPage<Props> = (): JSX.Element => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-5s space-y-8">
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
        <BlogCard title="Dummy" description="dumy dumy dumy dumy dumy dumy "/>
      </div>
    </>
  );
};
export default blogs;
