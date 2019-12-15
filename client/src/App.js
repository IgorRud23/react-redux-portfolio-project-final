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

import Container from '@material-ui/core/Container';

import BookDetails from './containers/BookDetails';
import CreateBook from './containers/CreateBook';
import HomePage from './containers/Home';
import DeleteBox from './containers/DeleteBox';


function App() {
  return (
      <HashRouter>
        <Provider store={store}>
          <Container maxWidth='xl'>
            <div className="App">
              <img src={logo} className='App-logo' alt='logo'/>
              <Header/>
              <Navi/>
              <br/>

              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/details' component={BookDetails}/>
                <Route exact path='/create' component={CreateBook}/>
                <Route exact path='/delete' component={DeleteBox}/>
                <Route component={NotFound}/>
              </Switch>

              <Footer/>
            </div>
          </Container>
        </Provider>
      </HashRouter>
  );
};

export default App;
