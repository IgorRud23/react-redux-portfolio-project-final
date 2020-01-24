//stateless component

import React from 'react';
import {useHistory} from 'react-router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Navi = () => {
  const history = useHistory();
  const currentPath = history.location.pathname; //returns the pathname of a URL.
  console.log(currentPath);

  const handleClick = path => () => {
    history.push(path);
  };

  return (
    <ButtonGroup size='large' color='primary'>
      <Button disabled={currentPath==='/'} onClick={handleClick('/')}>Home</Button>
      <Button disabled={currentPath==='/create'} onClick={handleClick('/create')}>Add a new Book</Button>
      <Button disabled={currentPath==='/delete'} onClick={handleClick('/delete')}>Remove Book</Button>
      <Button disabled={currentPath==='/about'} onClick={handleClick('/about')}>About</Button>
    </ButtonGroup>
  );
};

export default Navi;
