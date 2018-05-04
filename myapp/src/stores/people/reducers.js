import {
  GET_ALL_PEOPLE_LOADING,
  GET_ALL_PEOPLE_ERROR,
  GET_ALL_PEOPLE_SUCCESS,
  CLEAR_PEOPLE_LIST,
  ADD_NEW_PEOPLE
} from './action.types'

const initialState = {
  loading: false,
  error: {
    status: false,
    message: ''
  },
   data: []
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case GET_ALL_PEOPLE_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action.message
        }
      }
    case GET_ALL_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      }
    case CLEAR_PEOPLE_LIST: 
      return {...initialState}
    case ADD_NEW_PEOPLE:
      return {
        ...state,
        data: [action.payload, ...state.data]
      }
    default:
      return state
  }
}

export default reducers