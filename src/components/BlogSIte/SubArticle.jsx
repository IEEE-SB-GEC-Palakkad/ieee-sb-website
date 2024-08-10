import React from 'react';

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
      </div>
    </div>
  );
};

export default SubArticle;
