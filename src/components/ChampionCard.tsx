import React from 'react';
import { Champion } from '../components/Champions';

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  return (
    <div className="champion-card">
      <img src={champion.imageUrl} alt={champion.name} />
      <h3>{champion.name}</h3>
    </div>
  );
};

export default ChampionCard;