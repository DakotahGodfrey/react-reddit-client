import React from "react";
import { Link } from "react-router-dom";

const Aside = ({ trendingSubs }) => {
  return (
    <aside className="sidebar">
      <article className="aside-trending">
        <div className="aside-header">
          <h2>Trending Communities</h2>
        </div>
        <ul className="trending-subs">
          <Link className="trending-sub">
            <li>
              <span className="ranking">1</span> {trendingSubs[0]}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">2</span> {trendingSubs[1]}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">3</span> {trendingSubs[2]}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">4</span> {trendingSubs[3]}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">5</span> {trendingSubs[4]}
            </li>
          </Link>
        </ul>
      </article>
    </aside>
  );
};

export default Aside;
