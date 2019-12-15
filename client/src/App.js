import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Slogan from './components/Slogan';
import Footer from './components/Footer';
import Navi from './components/Navi';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';

import Container from '@material-ui/core/Container';

import CreateBook from './containers/CreateBook';
import HomePage from './containers/Home';
import DeleteBox from './containers/DeleteBox';
import About from './components/About';

function App() {
  return (
      <HashRouter>
        <Provider store={store}>
          <Container maxWidth='xl'>
            <div className="App">
              <img src={logo} className='App-logo' alt='logo'/>
              <Slogan/>

              <Header/>
              <Navi/>
              <br/>

              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/create' component={CreateBook}/>
                <Route exact path='/bookdetails/:id' component={BookDetails}/>
                <Route exact path='/delete' component={DeleteBox}/>
                <Route exact path='/about' component={About}/>
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
