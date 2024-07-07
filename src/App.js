import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryMenu from './components/CategoryMenu';
import NewsList from './components/NewsList';
import axios from 'axios';

// Define API key and base URL
const API_KEY = '2ef03e3963344909b93f05308c080031';
const BASE_URL = 'https://newsapi.org/v2';

const App = () => {
  // State hooks for articles and category
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');

  // List of categories for the menu
  const [categories] = useState([
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]);

  // useEffect hook to fetch news whenever the category changes
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: {
            category: category, // Current category from state
            country: 'us', // Country code
            apiKey: API_KEY // API key for authorization
          }
        });
        // Update state with fetched articles
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Oops, fetching data was not successful', error);
      }
    };

    fetchNews();
  }, [category]); // Dependency array, re-run effect when category changes

  return (
    <div className='app'>
      <h1 className='title1'>Global Newz</h1>
      {/* Category menu to select different news categories */}
      <CategoryMenu categories={categories} onSelectCategory={setCategory} />
      {/* News list to display fetched articles */}
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
