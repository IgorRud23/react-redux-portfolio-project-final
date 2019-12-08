import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Navi from './components/Navi'
import NotFound from './containers/NotFound'
import HomePage from './components/HomePage'

import BookDetails from './containers/BookDetails'
import CreateBook from './containers/CreateBook'

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Header/>
          <Navi/>

            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/details' component={BookDetails}/>
            <Route exact path='/create' component={CreateBook}/>
            <Route component={NotFound}/>
            </Switch>

          <Footer/>
        </div>
      </HashRouter>
  );
};

export default App;
