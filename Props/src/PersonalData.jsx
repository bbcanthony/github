import React from 'react';
import PropTypes from 'prop-types';

const PersonalData= ({ name, age, email, job, favoriteFlowers, onSelect}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Job:</strong> {job}</p>
      <div>
        <strong>Favorite Flowers:</strong>
        <ul>
          {favoriteFlowers.map((flower, index) => (
            <li key={index}>{flower}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => onSelect(name)}>Select</button>
    </div>
  );
};

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  favoriteFlowers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PersonalData;
