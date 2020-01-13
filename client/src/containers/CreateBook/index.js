import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {addItemToList} from '../../redux-core/actions/list';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const initState = {
  name: '',
  author: '',
  genre: '',
  image_src: '',
  discription: '',
  release_date: '',
};

const CreateBook = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState(initState);

  const handleOnChange = (key) => (event) => {
    const value = event.target.value;
    if (value.length < 1000) {
    setState(preState => ({...preState, [key]: value}) )
  }
  };

  const handleSave = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(state),
      credentials: 'omit',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };



    fetch('http://localhost:3000/api/books/create', options)
      .then(res => res.json())
      .then(newBook => {
        dispatch(addItemToList(newBook));
        console.log(newBook);
        setState(initState);
        alert('Successfully created!');
      }).catch(console.error);
    };

  return (
    <main>
      <Typography variant='h4' color='primary'>Put Book on List</Typography>

      <form noValidate autoComplete='off' className="App-column-center">
        <TextField onChange={handleOnChange('name')} value={state.name} label='name' margin='normal' placeholder='book title'/>
        <TextField onChange={handleOnChange('author')} value={state.author} label='author' margin='normal' placeholder='author name'/>
        <TextField onChange={handleOnChange('genre')} value={state.genre} label='genre' margin='normal' placeholder='book genre'/>
        <TextField onChange={handleOnChange('image_src')} value={state.image_src} label='image src' margin='normal' placeholder='paste url here'/>
        <TextField onChange={handleOnChange('discription')} value={state.discription} label='discription' margin='normal' placeholder='short discription'/>
        <TextField onChange={handleOnChange('release_date')} value={state.release_date} label='release date' margin='normal' placeholder='year'/>

        <Button color='primary' variant='contained' onClick={handleSave}>Create</Button>
      </form>
    </main>
  )
};

export default CreateBook;
