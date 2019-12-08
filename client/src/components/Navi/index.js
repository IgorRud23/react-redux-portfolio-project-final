import React from 'react';
import {Link} from 'react-router-dom';

const Navi = () => {
  return (
    <nav>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/create'>Add a new Book</Link>
      </li>
    </nav>
  );
};

export default Navi;
