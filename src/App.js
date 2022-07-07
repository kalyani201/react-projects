import './App.css';
import React, { useState } from 'react';
import data from './component/data';
import Question from './component/Question';

function App() {
  const[question, setQuestion] = useState(data)
  return (
    <div className="App">
      <h3>Accordion Projects</h3>
      {
        question.map((question) => {
          return (
            <Question key={question.id} {...question} />
          
          )
        })
      }
    </div>
  );
}

export default App;
