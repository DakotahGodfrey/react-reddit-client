import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
import bmcLogo from "../../../assets/media/bmc-logo-yellow.png";
const Contact = () => {
  const dark = useSelector(selectDarkMode);
  document.title = "Contact The Developer";
  return (
    <div className={dark ? "dark page" : "page"}>
      <Navbar isContact={true} />
      <main className="contact-main">
        <header>
          <h1>Hey there,</h1>
          <h2>
            My name's Dakotah, I built this Reddit client as part of{" "}
            <a
              className="contact-link"
              href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
            >
              Codecademy's Frontend engineering pathway
            </a>
            , I hope you're enjoying it.
          </h2>
          <p>
            If you have any feedback, or you just want to say hi. Feel free to
            get in touch.
          </p>
        </header>

        <article className="contact-form">
          <h3>Send me an e-mail</h3>
          <form name="contact" method="POST" aria-label="contact form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-fields">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div className="form-fields">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e-mail address"
                required
              />
            </div>
            <div className="form-fields">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button type="submit">Send </button>
          </form>
        </article>
        <aside className="social-links">
          <h3>My social media</h3>
          <ul>
            <li>
              <span>
                <i className="fab fa-twitter"></i> Twitter:
              </span>
              <a href="https://twitter.com/dakotah_dev">@dakotah_dev</a>
            </li>
            <li>
              <span>
                <i className="fab fa-github"></i> Github:
              </span>
              <a href="https://github.com/DakotahGodfrey">@DakotahGodfrey</a>
            </li>
            <li>
              <span>
                <i className="fab fa-linkedin"></i> Linkedin:
              </span>
              <a href="https://linkedin.com/dakotah_dev">@dakotah_godfrey</a>
            </li>
            <li>
              <span>
                <i className="fas fa-globe"></i> My Portfolio:
              </span>
              <a href="https://dakotahg.dev">dakotahg.dev</a>
            </li>
          </ul>
        </aside>
        <p className="bmc">
          If you really enjoyed the app you can support me at{" "}
          <a href="https://www.buymeacoffee.com/dakotahgb">
            {" "}
            <img src={bmcLogo} alt="" /> Buy Me A Coffee
          </a>
        </p>
      </main>
    </div>
  );
};

export default Contact;
