import './App.css';
import React, { useState } from 'react';
import data from './components/data';
import Card from './components/Card';

function App() {
  const [tour, setTour] = useState(data);

  return (
    <div className="App">
      {tour.length > 0 ? <>
        <h3>Tour Project</h3>
        <Card tour={tour} setTour={setTour} />
      </> : <>

        <h2>No data found</h2>
        <button onClick={() => setTour(data)}>Refresh</button>

      </>}

    </div>
  );
}

export default App;
