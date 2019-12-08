import React from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Navi from './components/Navi'

function App() {
  return (
    <div className="App">
    <Header/>
    <Navi/>
    <Footer/>
    </div>
  );
}

export default App;
