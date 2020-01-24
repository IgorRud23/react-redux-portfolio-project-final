import React from 'react';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Typography style={{whiteSpace: 'pre-line'}}>
    {`
      We helping people to exchange knowledge and explore the world of books.
      With us, will be easier to pick the right book for yourself and share books that inspired you.
      Feel free to add your favorite books on our list, more books - more knowledge.
    `}
    </Typography>
  )
};

export default About;
