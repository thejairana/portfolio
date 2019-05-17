import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PrintButton from "./components/PrintButton";
import Resume1 from './resumes/format-1/formatt-1';

function App() {
  return (
    <div className="container">
      <PrintButton id={"resume"} label={"Print"} />
      <Resume1 />
    </div>
  );
}

export default App;
