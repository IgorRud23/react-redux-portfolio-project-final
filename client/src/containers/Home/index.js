import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {getListOfBooks} from '../../redux-core/actions/list'

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const listOfBooks = useSelector(state => state.list);

  useEffect(() => {
      dispatch(getListOfBooks());
  }, []); //add ampty array to ensure that containers renders once.

  const handleOpenItem = bookID => () => {
    history.push(`/bookdetails/${bookID}`);
  };


  return(
    <section>

      <Typography variant='h4' color='primary'>Books List</Typography>

        <List className="App-column-center">
          {listOfBooks.data.map((book, index) => (
            <ListItem key={book.id} button onClick={handleOpenItem(book.id)} divider>
              <Typography>{index + 1}: {book.name}</Typography>
            </ListItem>
          ))}
        </List>

    </section>
  );
};

export default Home;
