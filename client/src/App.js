import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Navi from './components/Navi';
import NotFound from './containers/NotFound';
import HomePage from './components/HomePage';

import BookDetails from './containers/BookDetails';
import CreateBook from './containers/CreateBook';











function App() {
  return (
      <HashRouter>
        <Provider store={store}>
        <div className="App">
          <img src={logo} className='App-logo' alt='logo'/>
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
      </Provider>
      </HashRouter>
  );
};

export default App;
