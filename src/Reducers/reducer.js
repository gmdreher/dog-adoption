import {GET_DOGS, ADOPT_DOGS, REMOVE_DOGS} from '../Actions/index'

export const inicialState = {
  dogs: [],
  adopted: []
}

function reducer(state = inicialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return{
        ...state,
        dogs: action.payload
      }
    case ADOPT_DOGS:
      return{
        ...state,
        adopted: action.payload
      }
    // case REMOVE_DOGS:
    //   return{
    //     ...state,
    //     dogs: action.payload
    //   }
    default:
      return state;
  }

}
export default reducer;