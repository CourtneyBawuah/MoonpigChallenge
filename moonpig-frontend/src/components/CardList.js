// CardList.js
import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import the CSS file for styling

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Configure the CORS proxy URL (replace with your actual proxy URL)
        const proxyUrl = 'http://localhost:8080';
        const apiUrl = 'https://moonpig.github.io/tech-test-frontend/search.json';

        // Make a fetch request using the proxy URL to bypass CORS restrictions
        const response = await fetch(`${proxyUrl}/${apiUrl}`);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('API Data:', data);

        if (Array.isArray(data.cards)) {
          setCards(data.cards);
        } else {
          setCards([]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data. Please try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="card-list">
      <h1>Card List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : cards.length > 0 ? (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))}
        </ul>
      ) : (
        <p>No cards available.</p>
      )}
    </div>
  );
};

export default CardList;
