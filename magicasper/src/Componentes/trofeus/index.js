import React from 'react';

const Trofeus = ({ pontos }) => {
  const trofeuElement = [];

  // Calcula o número de troféus com base nos pontos, limitando a 5 no máximo
  const numTrofeus = Math.min(5, Math.floor(pontos / 100));

  // Preenche o array de troféus
  for (let i = 0; i < numTrofeus; i++) {
    trofeuElement.push(
      <span key={i} className="trofeus">
        🏆
      </span>
    );
  }

  return <div className="trofeus">{trofeuElement}</div>;
};

export default Trofeus;