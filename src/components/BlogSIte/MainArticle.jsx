import React from "react";

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
      <div class="category-box">{Category}</div>
      <a href={"/blog/${id}"} className="article-link">
        <h1>{heading}</h1>
      </a>

      <p className="read-time">
        <a href="#" className="article-link">
          {readTime}
        </a>
      </p>
      <a href={"/blog/${id}"} className="article-link">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </a>
      <p>
        <a href={"/blog/${id}"} className="article-link">
          {description}
        </a>
      </p>
      <a href={"/blog/${id}"} className="article-link">
        <div className="button-container">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Read More</span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default MainArticle;
