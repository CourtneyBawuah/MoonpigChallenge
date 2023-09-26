// CardDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { viewCard } from '../Api';

const CardDetails = () => {
  const { productNo } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await viewCard(productNo);
        setCard(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [productNo]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{card.name}</h1>
      <p>{card.description}</p>
      {/* Add more card details as needed */}
    </div>
  );
};

export default CardDetails;
