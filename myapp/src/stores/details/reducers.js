import {
  GET_DETAIL_LOADING,
  GET_DETAIL_ERROR,
  GET_DETAIL_SUCCESS} from './action.types'

const initialState = {
  loading: false,
  error: {
    status: false,
    message: ''
  },
  data: []
}

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_DETAIL_LOADING:
    return {
      ...state,
      loading: true
    }
  case GET_DETAIL_ERROR:
    return {
      ...state,
      loading: false,
      error: {
        status: true,
        message: action.message
      }
    }
  case GET_DETAIL_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
    default:
      return state
  }
}

export default reducers