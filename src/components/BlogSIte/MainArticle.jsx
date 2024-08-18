import React from "react";
import { Link } from "react-router-dom";

const MainArticle = ({
  id,
  Category,
  heading,
  readTime,
  imageUrl,
  description,
}) => {
  return (
    <div className="main-article">
      <div className="category-box">{Category}</div>
      <Link to={`/blog/${id}`} className="article-link">
        <h1>{heading}</h1>
      </Link>

      <p className="read-time">
        <span className="article-link">
          {readTime}
        </span>
      </p>
      <Link to={`/blog/${id}`} className="article-link">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </Link>
      <p>
        <Link to={`/blog/${id}`} className="article-link">
          {description}
        </Link>
      </p>
      <Link to={`/blog/${id}`} className="article-link">
        <div className="button-container">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Read More</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MainArticle;