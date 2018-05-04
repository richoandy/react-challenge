import {
  GET_ALL_STARSHIPS_LOADING,
  GET_ALL_STARSHIPS_ERROR,
  GET_ALL_STARSHIPS_SUCCESS,
  CLEAR_STARSHIPS_LIST} from './action.types'
import axios from 'axios'

export const getAllStarships = (starship) => {
  const index = [3, 5, 9]
  return dispatch => {

    index.forEach(i => {
      const endPoint = `https://swapi.co/api/starships/${i}`
      dispatch(getAllStarshipsLoading())
      axios.get(endPoint)
        .then(function (response) {
          dispatch(getAllStarshipsSuccess(response.data))
        })
        .catch(function (err) {
          dispatch(getAllStarshipsError(err.message))
        }) 
    })
  }
}

const getAllStarshipsLoading = () => ({
  type: GET_ALL_STARSHIPS_LOADING
})

const getAllStarshipsError = (err) => ({
  type: GET_ALL_STARSHIPS_ERROR,
  message: err
})

const getAllStarshipsSuccess = (payload) => ({
  type: GET_ALL_STARSHIPS_SUCCESS,
  payload: payload
})

export const clearStarships =  () => ({
  type: CLEAR_STARSHIPS_LIST
})