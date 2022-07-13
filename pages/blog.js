import React from "react";

// core components
import BlogPostsListHeader from "components/blog/header/BlogPostsListHeader";
import BlogLayout from "../components/blog/BlogLayout";
import BlogPostCard from "components/blog/BlogPostCard";

const Blog = () => {
  return (
    <BlogLayout title="Blog - SmartComply">
      <BlogPostsListHeader />
      <main className="px-5 py-2 md:py-8 md:px-20">
        <section className="blogPostListContainer my-5">
          <div className="blogPostList grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 ">
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
          </div>
        </section>
      </main>
    </BlogLayout>
  );
};

export default Blog;
