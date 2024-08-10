import React from 'react';
import './ArticleGrid.css';
import MainArticle from './MainArticle';
import SubArticle from './SubArticle';
import Banner from '../Banner/Banner';

const ArticleGrid = () => {
  return (<>
    <Banner/>
    <div className="gridblock">
      <div className="main-articles">
        <MainArticle
        Category="infomation"
          heading="Main Article Heading 1"
          readTime="August 7, 2024 |5 min read"
          imageUrl="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
        />
        <MainArticle
          heading="Main Article Heading 2"
          readTime="August 7, 2024 |5 min read"
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui et libero sollicitudin."
        />
      </div>
      <div className="sub-articles">
        <SubArticle
        Category="sub"
          heading="Sub-Article 1"
          readTime="August 7, 2024 |5 min read"
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
        />
        <SubArticle
          heading="Sub-Article 2"
          readTime="August 7, 2024 |5 min read"
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
        />
        <SubArticle
          heading="Sub-Article 3"
          readTime="August 7, 2024 |5 min read"
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
        />
      </div>
    </div>
</>  );
};

export default ArticleGrid;
