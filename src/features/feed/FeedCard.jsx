import React from "react";

const FeedCard = ({ post }) => {
  const { title, image, video, author, commentCount, subreddit } = post;
  return (
    <section className="post-card">
      {/* Vote Component Here */}
      <div className="post-vote-control">
        <button>
          <i className="material-icons">arrow_upward</i>
        </button>
        <button>
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
      {/* Post Information Here */}
      <header className="post-information">
        <span className="post-subreddit">{subreddit}</span>
        <span className="post-author">{author}</span>
      </header>
      {/* Post Content Here */}
      <article className="post-content">
        <h2>{title}</h2>
        {image && <img src={image} alt="post image" />}
        {video && <iframe src={video}></iframe>}
      </article>
      {/* Post Footer Here */}
      <footer>
        <span>{commentCount} comments</span>
      </footer>
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
