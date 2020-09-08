import React from 'react';

type Props = {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[]; // dit is een array of strings
};

export default function Pokemon({
  name,
  weight,
  awesome,
  terrifying,
  abilities,
}: Props) {
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight} kg</p>
      <p>Awesome: {awesome ? 'YES!' : 'nope, not really'}</p>
      <p>Terrifying: {terrifying ? 'Very' : 'nah, lovable'}</p>
      <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p>
      <p>Abilities: {abilities}</p>
    </div>
  );
}
