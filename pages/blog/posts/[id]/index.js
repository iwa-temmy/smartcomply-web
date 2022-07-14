import React from "react";
import { useRouter } from "next/router";

// core components
import BlogLayout from "components/blog/BlogLayout";
import PostHeader from "components/blog/post/PostHeader";
import BlogPostCard from "components/blog/BlogPostCard";

import styles from "styles/BlogLayout.module.css";

const Post = props => {
  const router = useRouter();
  const { post, other_posts } = props;

  return (
    <BlogLayout title={post.title}>
      <main className="px-3 py-2 md:py-8 md:px-20 relative">
        <PostHeader
          title={post.title}
          categories={post.categories}
          date={post.pubDate}
          id={router.query.id}
        />
        <article
          className={`lg:w-9/12 md:px-20 ${styles.postContent}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <section className="my-20">
          <h2
            className={`uppercase text-lg font-medium mb-5 ${styles.primaryText}`}
          >
            other posts by us
          </h2>
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {other_posts?.map(post => {
              const postId = post.guid.split("/").slice(-1)[0];
              return <BlogPostCard post={post} key={postId} id={postId} />;
            })}
          </div>
        </section>
      </main>
    </BlogLayout>
  );
};

export const getServerSideProps = async context => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@smartcomplyapp`
  );
  const posts = await res.json();
  return {
    props: {
      post: posts.items.find(
        post => post.guid === `https://medium.com/p/${context.params.id}`
      ),
      other_posts: posts.items.filter(
        post => post.guid !== `https://medium.com/p/${context.params.id}`
      )
    }
  };
};

export default Post;
