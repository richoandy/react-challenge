import {
  GET_DETAIL_LOADING,
  GET_DETAIL_ERROR,
  GET_DETAIL_SUCCESS,
  FETCH_FILM_TITLE,
  CLEAR_FILM_TITLE
} from './action.types'

import axios from 'axios'

export const getDetail = (type, param) => {
  return dispatch => {
    dispatch(getDetailLoading())
    dispatch(clearFilmTitle())
    axios.get(`https://swapi.co/api/${type}/${param}`)
      .then(function (response) {
        let filmList = response.data.films
        filmList.forEach(f => {
          axios.get(f)
            .then(function (response) {
              dispatch(fetchFilmTitle(response.data))
            })
            .catch(function (err) {

            })
        })
        dispatch(getDetailSuccess(response.data))
      })
      .catch(function (err) {
        dispatch(getDetailError(err.message))
      })
  }
}

const fetchFilmTitle = (payload) => ({
  type: FETCH_FILM_TITLE,
  payload: payload
})

const clearFilmTitle = () => ({
  type: CLEAR_FILM_TITLE
})

const getDetailLoading = () => ({
  type: GET_DETAIL_LOADING
})

const getDetailError = (err) => ({
  type: GET_DETAIL_ERROR,
  message: err
})

const getDetailSuccess = (payload) => ({
  type: GET_DETAIL_SUCCESS,
  payload: payload
})