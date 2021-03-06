const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const itemExist = state.myList.find(item => item.id == action.payload.id)
      if (itemExist) return { ...state }

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      }

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
   
    case 'GET_VIDEO_SOURCE':
      console.log(action.payload);

      const movie = state.trends.filter(item => item.id == action.payload)
      
      return {
        ...state,
      
      }

    default:
      return state;
  }
};

export default reducer;
