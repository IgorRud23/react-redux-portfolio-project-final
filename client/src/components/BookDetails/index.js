import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {getListOfBooks} from '../../redux-core/actions/list';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const BookInfo = () => {
  const selectedID = Number(useParams().id);
  const dispatch = useDispatch();
  const book = useSelector(state => state.list.data.find((book) => book.id === selectedID));

  console.log(book);

  useEffect(() => {
      dispatch(getListOfBooks());
  }, []);

  if (!book) return <Typography> LOADING ...</Typography>

  return (
    <section>
      <Typography align='center' variant='h6' color='primary' gutterBottom>BOOK INFO</Typography>
      <br/>
      <Paper elevation={7} className='App-column-center'>

        <Typography gutterBottom><b>{book.name}</b></Typography>
        <img src={book.image_src} alt='Image of event'/>
        <Typography paragraph>{book.discription}</Typography>
        <Typography gutterBottom>Author: {book.author}</Typography>
        <Typography gutterBottom>Genre: {book.genre}</Typography>
        <Typography gutterBottom>Release date: {book.release_date}</Typography>

      </Paper>
      </section >
  )
};

export default BookInfo;
