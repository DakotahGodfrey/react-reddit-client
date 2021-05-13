import React from "react";
import Toolbar from "../../components/layout/Toolbar/Toolbar";
import FeedCard from "./FeedCard";

const Feed = () => {
  const posts = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      image: "https://i.redd.it/043rme7pzvy61.jpg",
      author: "u/throwaway",
      subreddit: "r/rarepuppers",
      commentCount: 9,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      video: "https://www.youtube.com/embed/G52dUQLxPzg",
      author: "u/throwaway235234",
      subreddit: "r/rarepuppers",
      commentCount: 1233,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      image: "https://i.redd.it/043rme7pzvy61.jpg",
      author: "u/throwaway",
      subreddit: "r/rarepuppers",
      commentCount: 453,
    },
  ];
  return (
    <section className="feed-container">
      {/* Feed Navigation Component */}
      <Toolbar />
      {posts.map((post) => (
        <FeedCard post={post} />
      ))}
    </section>
  );
};

export default Feed;
