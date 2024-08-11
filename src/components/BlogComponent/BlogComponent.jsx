import React from "react";
import { useParams } from "react-router-dom";
import "./BlogComponent.css";
import Banner from "../Banner/Banner";
const BlogComponent = () => {
  const { id } = useParams();

  // Logic to fetch the article data based on the `id`
  const articleData = {
    1: {
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      heading: "Main Article Heading 1",
      publishedAt: "August 7, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },

    2: {
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      heading: "Main Article Heading 1",
      publishedAt: "August 7, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },

    3: {
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      heading: "Main Article Heading 1",
      publishedAt: "August 7, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    4: {
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      heading: "Main Article Heading 1",
      publishedAt: "August 7, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },

    5: {
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      heading: "Main Article Heading 1",
      publishedAt: "August 7, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  };

  const article = articleData[id];

  return (
    <>
      <Banner />
      <div>
        <div className="image-container1">
          <img
            className="image1"
            src={article.imageUrl}
            alt={article.heading}
          />
        </div>
        <div>
          <h1 className="heading11">{article.heading}</h1>
          <h5 className="heading22">Published At - {article.publishedAt}</h5>
          <h4 className="para11">{article.content}</h4>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
