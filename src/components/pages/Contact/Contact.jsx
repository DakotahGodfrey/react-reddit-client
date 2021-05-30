import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
const Contact = () => {
  const dark = useSelector(selectDarkMode);
  return (
    <div className={dark ? "dark page" : "page"}>
      <Navbar isContact={true} />
      <main className="contact-main">
        <header>
          <h1>Hey there,</h1>
          <h2>My name's Dakotah, I hope you're enjoing this app.</h2>
          <p>
            If you have any feedback, or you just want to say hi! Feel free to
            get in touch!
          </p>
        </header>

        <article className="contact-form">
          <h3>Send me an e-mail</h3>
          <form name="contact" method="POST" aria-label="contact form">
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
          <h3>Or if your prefer, you can reach out on social media</h3>
          <ul>
            <li>
              <span>
                Twitter
                <i className="fab fa-twitter"></i>
              </span>
              <a href="https://twitter.com/dakotah_dev">@dakotah_dev</a>
            </li>
            <li>
              <span>
                Github <i className="fab fa-github"></i>
              </span>
              <a href="https://github.com/DakotahGodfrey">@DakotahGodfrey</a>
            </li>
            <li>
              <span>
                Linkedin <i className="fab fa-linkedin"></i>
              </span>
              <a href="https://linkedin.com/dakotah_dev">@dakotah_godfrey</a>
            </li>
            <li>
              <span>
                My Website <i className="fas fa-code"></i>
              </span>
              <a href="https://dakotahg.dev">dakotahg.dev</a>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Contact;
