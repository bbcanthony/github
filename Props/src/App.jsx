import React from 'react';
import PersonalData from './PersonalData';

const App = () => {
  const handleSelect = (name) => {
    alert(`You selected: ${name}`);
  };
  return (
    <div>
      <h1>Personal Data Views</h1>
      <PersonalData
        name="Alice Johnson"
        age={29}
        email="alice.johnson@example.com"
        job="Software Engineer"
        favoriteFlowers={['Roses', 'Tulips', 'Daisies']}
        onSelect={handleSelect}
      />
      <PersonalData
        name="Bob Smith"
        age={34}
        email="bob.smith@example.com"
        job="Graphic Designer"
        favoriteFlowers={['Sunflowers', 'Orchids']}
        onSelect={handleSelect}
      />
      <PersonalData
        name="Charlie Brown"
        age={42}
        email="charlie.brown@example.com"
        job="Teacher"
        favoriteFlowers={['Lilies', 'Carnations', 'Chrysanthemums']}
        onSelect={handleSelect}


      />
      <PersonalData
        name="Diana Prince"
        age={30}
        email="diana.prince@example.com"
        job="Architect"
        favoriteFlowers={['Lavender', 'Peonies']}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
