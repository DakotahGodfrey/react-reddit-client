import React from "react";
import { Link } from "react-router-dom";
import PostBanner from "../PostBanner/PostBanner";
import PostContent from "../PostContent/PostContent";
import PostFooter from "../PostFooter/PostFooter";
import VoteBar from "../VoteBar/VoteBar";
const FeedCard = ({ post }) => {
  const { title, image, video, author, commentCount, subreddit } = post;
  const postDetails = {
    author,
    subreddit,
  };
  const postContent = {
    title,
    image,
    video,
  };
  const postLinks = {
    commentCount,
  };
  return (
    <section aria-label="user post" className="post-card">
      {/* Vote Component Here */}
      <VoteBar />
      {/* Post Information Here */}
      <PostBanner postDetails={postDetails} />
      {/* Post Content Here */}
      <PostContent postContent={postContent} />
      {/* Post Footer Here */}
      <PostFooter postLinks={postLinks} />
    </section>
  );
};

export default FeedCard;
{
  /* 
        This card will contain all of the posts components.
        the post has 4 main components:
        1) the vote card.
        2) the post info: title, user, etc...
        3) the post content.
        4) a footer with links 
        I think a 2 column, 3 row layout makes sense for the card itself. 
    */
}
