import React from 'react';

const Rating = ({ rating }) => {
  const maxStars = 5; // Define o número máximo de estrelas
  const starElements = [];

  // Preenche as estrelas com base na avaliação
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      starElements.push(
        <span key={i} className="star-filled">
          &#9733; {/* Unicode para uma estrela preenchida */}
        </span>
      );
     } else {
      starElements.push(
        <span key={i} className="star-outline">
          &#9734; {/* Unicode para uma estrela vazia */}
        </span>
      );
    }
  }

  return <div className="rating">{starElements}</div>;
};

export default Rating;