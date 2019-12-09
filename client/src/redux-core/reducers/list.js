const initState = {
  isPending: false,
  hasError: null,
  data: [],
};

const list = (state = initState, action) => {
  //we have 3 actions types to track server responce
  switch (action.type) {
    case 'GET_LIST' + '_PENDING':
    return ({
      ...state,
      isPending: true,
    });
    case 'GET_LIST' + '_FULFILLED':
    return ({
      ...state,
      isPending: false,
      data: action.payload,
    });
    case 'GET_LIST' + '_REJECTED':
    return ({
      ...state,
      isPending: false,
      hasError: action.payload,
    });
  }
  return state;
};

export default list;
