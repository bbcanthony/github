import React, { useState } from 'react';

const App = () => {
  const [stringVar, setStringVar] = useState('Clicked');
  const [numberVar, setNumberVar] = useState(0);
  const [listVar, setListVar] = useState(['First']);

  const mutateState = () => {
    setStringVar((prev) => prev + "");
    setNumberVar((prev) => prev + 1);
    setListVar((prev) => [...prev, stringVar + numberVar]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>State Management Example</h1>
      <p><strong>String Variable:</strong> {stringVar}</p>
      <p><strong>Number Variable:</strong> {numberVar}</p>
      <div>
        <strong>List</strong>
        <ul>
          {listVar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={mutateState} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Click
      </button>
    </div>
  );
};

export default App;
