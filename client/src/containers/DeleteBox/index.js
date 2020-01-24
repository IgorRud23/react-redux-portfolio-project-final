import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {deleteItemFromList, getListOfBooks} from '../../redux-core/actions/list';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const DeleteBox = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.list.data);

  useEffect(() => {
    dispatch(getListOfBooks());
  }, []);

  const onDelete = (bookID) => () => {
    console.log(bookID);
    dispatch(deleteItemFromList(bookID));

    const options = {
      method: 'POST',
      body: JSON.stringify({id: bookID}),
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch('http://localhost:3000/api/books/delete', options).catch(console.error);
  };

  return (
    <section>
      <Typography variant='h4' color='primary' align='center'>DELETE BOOKS PAGE</Typography>

      <List>
        {books.map(book => (
          <ListItem key={book.id}>
            <ListItemText primary={book.name}/>

            <ListItemSecondaryAction>
              <Button onClick={onDelete(book.id)} variant='contained' color='primary'>delete</Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default DeleteBox;
