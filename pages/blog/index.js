import React, { useEffect, useState } from "react";

// core components
import BlogPostsListHeader from "components/blog/header/BlogPostsListHeader";
import BlogLayout from "components/blog/BlogLayout";
import BlogPostCard from "components/blog/BlogPostCard";
import { filterMatch, getAllCategories } from "utils";

const Blog = props => {
  const { posts } = props;
  const [allCategories, setAllCategories] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    categories: []
  });

  useEffect(() => {
    const categories = getAllCategories(posts);
    setAllCategories(categories);
  }, [posts]);
  return (
    <BlogLayout title="Blog - SmartComply">
      <BlogPostsListHeader
        filters={filters}
        setFilters={setFilters}
        allCategories={allCategories}
      />
      <main className="px-5 py-2 md:py-8 md:px-20">
        <section className="my-5">
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 ">
            {posts.items.map(post => {
              const shouldShow = filterMatch(filters, post);
              const postId = post.guid.split("/").slice(-1)[0];
              return shouldShow ? (
                <BlogPostCard post={post} key={postId} id={postId} />
              ) : null;
            })}
          </div>
        </section>
      </main>
    </BlogLayout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@smartcomplyapp`
  );
  const posts = await res.json();
  return { props: { posts } };
};

export default Blog;
