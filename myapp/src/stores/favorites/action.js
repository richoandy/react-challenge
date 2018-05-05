import { ADD_NEW_FAVORITES, DELETE_FAVORITE } from './action.types'

export const addFavorite = (char) => {
  return dispatch => {
    dispatch(addNewFavorite(char))
  }
}
 
export const deleteFavorite = (payload) => {
  return dispatch => {
    dispatch(delFavorite(payload))
  }
}

const addNewFavorite = (payload) => ({
  type: ADD_NEW_FAVORITES,
  payload: payload
})

const delFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload: payload
})