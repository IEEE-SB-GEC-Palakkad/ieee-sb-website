import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const SubArticle = ({ id, Category, heading, date, readTime, imageUrl, description }) => {
  return (
    <div className="sub-article">
      <div className="sub-category-box">{Category}</div>
      <Link to={`/blog/${id}`} className="article-link">
        <h2>{heading}</h2>
      </Link>
      <p className="read-time">
        <span className="article-link">{readTime}</span>
      </p>
      <Link to={`/blog/${id}`} className="article-link">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </Link>
      <div className="card-content">
        <p className="date">
          <span className="article-link">{date}</span>
        </p>
        <p className='desc'>
          <Link to={`/blog/${id}`} className="article-link">{description}</Link>
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

const SubArticle = ({ Category,heading, date, readTime, imageUrl, description }) => {
  return (
    <div className="sub-article">
      <div class="sub-category-box">{Category}</div>
      <a href="#" className="article-link">
          <h2>{heading}</h2>
        </a>
      <p className="read-time"><a href="#" className="article-link">{readTime}</a></p>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-content">
        
        <p className="date"><a href="#" className="article-link">{date}</a></p>
        
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
    </div>
  );
};

<<<<<<< HEAD
export default SubArticle;
=======
export default SubArticle;
>>>>>>> origin/experimental
