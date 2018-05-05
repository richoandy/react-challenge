import {
  GET_FILM_LOADING,
  GET_FILM_ERROR,
  GET_FILM_SUCCESS
} from './action.types'

import axios from 'axios'

export const getFilm = (id) => {
  return dispatch => {
    dispatch(getFilmLoading())
    axios.get(`https://swapi.co/api/films/${id}`)
    .then(function (response) {
      dispatch(getFilmSuccess(response.data))
    })
    .catch(function (err) {
      dispatch(getFilmError(err.message))
    })
  }
}

const getFilmLoading = () => ({
  type: GET_FILM_LOADING
})

const getFilmError = (err) => ({
  type: GET_FILM_ERROR,
  mesage: err
})

const getFilmSuccess = (payload) => ({
  type: GET_FILM_SUCCESS,
  payload: payload
})