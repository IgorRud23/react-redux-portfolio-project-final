export const getListOfBooks = () => {
  return ({
    type: 'GET_LIST',
    payload: fetch('http://localhost:3000/api/books/list').then(res => res.json()),
  });
};
