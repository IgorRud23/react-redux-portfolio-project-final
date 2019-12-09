import React from 'react';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CreateBook = () => {
  return (
    <main>
    <br/>
      <Typography variant='h3' color='primary'>Put Book on List</Typography>

      <form noValidate autoComplete='off' className="App-create-form">
        <TextField label='name' margin='normal' placeholder='book title'/>
        <TextField label='author' margin='normal' placeholder='author name'/>
        <TextField label='genre' margin='normal' placeholder='book genre'/>
        <TextField label='image src' margin='normal' placeholder='paste url here'/>
        <TextField label='discription' margin='normal' placeholder='short discription'/>
        <TextField label='release date' margin='normal' placeholder='year'/>

        <Button color='primary' variant='contained'>Create</Button>
      </form>
    </main>
  )
};

export default CreateBook;
