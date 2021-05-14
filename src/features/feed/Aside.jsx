import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="sidebar">
      <article className="aside-trending">
        <div className="aside-header">
          <h2>Trending Communities</h2>
        </div>
        <ul className="trending-subs">
          <Link className="trending-sub">
            <li>
              <span className="ranking">1</span> {}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">2</span> {}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">3</span> {}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">4</span> {}
            </li>
          </Link>
          <Link className="trending-sub">
            <li>
              <span className="ranking">5</span> {}
            </li>
          </Link>
        </ul>
      </article>
    </aside>
  );
};

export default Aside;
