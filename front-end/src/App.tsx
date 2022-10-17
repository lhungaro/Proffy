import React from 'react';
import './assets/styles/global.css';
import About from './pages/about';


import Landing from './pages/landing';
import Router from './routes';


function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Router />
    </div>
  );
}

export default App;
