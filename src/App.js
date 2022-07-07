import './App.css';
import React from 'react';
import { FaGithub } from "react-icons/fa"
import data from "./components/data"
import Review from './components/Review';

function App() {
  
  return (
    <div className="App">
      <h3>Review Projects</h3>
      <FaGithub />
      <Review />
    </div>
  );
}

export default App;
