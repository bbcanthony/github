import React, { useState } from 'react';

const App = () => {
  const [stringVar, setStringVar] = useState('Note');
  const [numberVar, setNumberVar] = useState(0);
  const [listVar, setListVar] = useState(['First']);

  const [checklist, setChecklist] = useState(['Buy groceries', 'Clean the house', 'Finish the report']);
  const [newItem, setNewItem] = useState('');

  const mutateState = () => {
    setStringVar((prev) => prev + '!');
    setNumberVar((prev) => prev + 1);
    setListVar((prev) => [...prev, `${stringVar}${numberVar}`]);
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setChecklist((prev) => [...prev, newItem.trim()]);
      setNewItem(''); 
    }
  };

  const handleDeleteItem = (index) => {
    const updatedList = checklist.toSpliced(index, 1);
    setChecklist(updatedList);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>State Management Example</h1>
      <p><strong>String Variable:</strong> {stringVar}</p>
      <p><strong>Number Variable:</strong> {numberVar}</p>
      <div>
        <strong>List Variable:</strong>
        <ul>
          {listVar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={mutateState} style={{ padding: '10px 20px', cursor: 'pointer', marginBottom: '20px' }}>
        Click
      </button>

      <hr />

      <h2>Checklist Application</h2>
      <ul>
        {checklist.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item} 
            <button 
              onClick={() => handleDeleteItem(index)} 
              style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
          style={{ padding: '5px', width: '200px' }}
        />
        <button 
          onClick={handleAddItem} 
          style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
