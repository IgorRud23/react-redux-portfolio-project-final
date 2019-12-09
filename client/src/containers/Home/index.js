import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {getListOfBooks} from '../../redux-core/actions/list'

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Home = () => {
  const dispatch = useDispatch();
  const listOfBooks = useSelector(state => state.list);

  useEffect(() => {
    if (!listOfBooks.data.length) {
      dispatch(getListOfBooks());
    }
  }, []); //add ampty array to ensure that containers renders once.

  return(
    <section>
    <Typography variant='h4' color='primary'>Books List</Typography>

    <List className="App-column-center">
      {listOfBooks.data.map(book => (
        <ListItem key={book.id} button>
          <Typography>{book.name}</Typography>
        </ListItem>
      ))}
    </List>
    </section>
  );
};

export default Home;
