import './App.css';
import React, { useState } from 'react';
import data from './components/data';
import Card from './components/Card';

function App() {
  const [tour, setTour] = useState(data);
  // const removeTour = (id) => {
  //   const newTour = tour.filter((tour) => tour.id !== id)
  //   setTour(newTour);
  // } 
  return (
    <div className="App">
      <h3>Tour Project</h3>
      <Card tour={tour} setTour={setTour} />
    </div>
  );
}

export default App;
