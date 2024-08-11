<<<<<<< HEAD
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
        <h1 className="titles">{heading}</h1>
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
=======
import React from 'react';

const MainArticle = ({ Category,heading, readTime, imageUrl, description }) => {
  return (
    <div className="main-article">
      <div class="category-box">{Category}</div>
      <a href="#" className="article-link">
        <h1>{heading}</h1>
      </a>
      
      <p className="read-time"><a href="#" className="article-link">{readTime}</a></p>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <p><a href="#" className="article-link">{description}</a></p>
      <div className="button-container">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Read More</span>
        </button>
      </div>
>>>>>>> origin/experimental
    </div>
  );
};

<<<<<<< HEAD
export default MainArticle;
=======
export default MainArticle;
>>>>>>> origin/experimental
