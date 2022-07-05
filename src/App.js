import './App.css';
import React, { useState } from 'react';
import List from './component/List';
import data from './component/data';

function App() {
  const[people, setPeople] = useState(data);
  
  return (
    <div className="App">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={() => {setPeople([])}}>Clear All</button>
    </div>
  );
}

export default App;
