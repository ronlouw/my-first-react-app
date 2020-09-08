import React from 'react';
import './App.css';
import Title from './components/Title';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={['Blaze', 'Solar power', 'Tough claws', 'Drought']}
        />
        <Pokemon
          name="Bulbasaur"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={['Overgrow', 'Chlorophyl']}
        />
        <Pokemon
          name="MewTwo"
          weight={122}
          awesome={true}
          terrifying={true}
          abilities={['Pressure']}
        />
        <Pokemon
          name="Mega beedrill"
          weight={65}
          awesome={false}
          terrifying={true}
          abilities={['Intimidate']}
        />
      </main>
    </div>
  );
}

export default App;
