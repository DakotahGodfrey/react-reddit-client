import React from "react";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="copyright-container">
        Made with &#10084;&#65039; by{" "}
        <a href="https://dakotahg.dev/about">Dakotah Godfrey</a>
      </div>

      <ul className="socials">
        <li>
          <a
            aria-label="twitter profile"
            href="https://twitter.com/dakotah_dev"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin profile"
            href="https://linkedin.com/https://www.linkedin.com/in/dakotah-godfrey-2186091ab/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="github profile"
            href="https://github.com/DakotahGodfrey"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default SiteFooter;
