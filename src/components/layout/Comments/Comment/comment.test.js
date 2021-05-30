import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "./Comment";
const avatarSource =
  "https://www.redditstatic.com/avatars/avatar_default_07_7E53C1.png";

const generateComment = (author, body, created_utc) => {
  return {
    data: {
      author,
      body,
      created_utc,
      avatarSource: avatarSource,
    },
  };
};
describe("Comment", () => {
  describe("comment card", () => {
    const comment = generateComment("Hunter S.", "foo baz bar", Date.now());
    beforeEach(() => {
      render(<Comment comment={comment} />);
    });

    it("should render an article with class comment-card", () => {
      expect(screen.getByRole("article")).toHaveClass("comment-card");
    });
    it("renders an figure with class comment-avatar", () => {
      expect(screen.getByRole("figure")).toBeInTheDocument();
    });
    it("renders an image with a src of avatarSource", () => {
      expect(screen.getByRole("img")).toHaveAttribute("src", avatarSource);
    });
    it("renders an element with the proper author text", () => {
      expect(screen.getByText(`u/${comment.data.author}`)).toBeInTheDocument();
    });
    it("renders an element with the proper body text", () => {
      expect(screen.getByText(comment.data.body)).toBeInTheDocument();
    });
  });
  describe("timeStamp", () => {
    describe("comment posted minutes ago", () => {
      const minutesAgo = Math.round(Date.now() / 1000) - 60;
      const comment = generateComment("F. Scott", "much ado", minutesAgo);
      beforeEach(() => {
        render(<Comment comment={comment} />);
      });

      it("renders an element with text: posted x minutes ago", () => {
        expect(screen.getByText("1 minutes ago")).toBeInTheDocument();
      });
    });
  });
  describe("comment posted hours ago", () => {
    const hoursAgo = Math.round(Date.now() / 1000) - 3600 * 2;
    const comment = generateComment("A. Towles", "civil", hoursAgo);
    beforeEach(() => {
      render(<Comment comment={comment} />);
    });
    it("renders an element with text: posted x hours ago", () => {
      expect(screen.getByText("2 hours ago")).toBeInTheDocument();
    });
  });
  describe("comment posted days ago", () => {
    const daysAgo = Math.round(Date.now() / 1000) - 86400 * 2;
    const comment = generateComment("K. Reiches", "civil", daysAgo);
    beforeEach(() => {
      render(<Comment comment={comment} />);
    });
    it("renders an element with text: posted x days ago", () => {
      expect(screen.getByText("2 days ago")).toBeInTheDocument();
    });
  });
  describe("comment posted Months ago", () => {
    const monthsAgo = Math.round(Date.now() / 1000) - 2592000 * 2;
    const comment = generateComment("K. Reiches", "civil", monthsAgo);
    beforeEach(() => {
      render(<Comment comment={comment} />);
    });
    it("renders an element with text: posted x months ago", () => {
      expect(screen.getByText("2 months ago")).toBeInTheDocument();
    });
  });
  describe("comment posted Years ago", () => {
    const yearsAgo = Math.round(Date.now() / 1000) - 31536000 * 2;
    const comment = generateComment("K. Reiches", "civil", yearsAgo);
    beforeEach(() => {
      render(<Comment comment={comment} />);
    });
    it("renders an element with text: posted x years ago", () => {
      expect(screen.getByText("2 years ago")).toBeInTheDocument();
    });
  });
});
