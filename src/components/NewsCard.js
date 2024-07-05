import React from 'react';

const defaultImageUrl = 'https://via.placeholder.com/300x200.png?text=No+Image+Available';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage || defaultImageUrl}
        alt={article.title}
        className="news-image"
      />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a className='learn1' href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
