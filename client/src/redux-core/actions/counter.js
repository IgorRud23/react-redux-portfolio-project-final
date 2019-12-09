export const updateCounter = (value) => {
  return ({
    type: 'INCREMENT',
    payload: value,  
  });
};
