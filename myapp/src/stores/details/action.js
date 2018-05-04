import {
  GET_DETAIL_LOADING,
  GET_DETAIL_ERROR,
  GET_DETAIL_LOADING,
  GET_DETAIL_SUCCESS
} from './action.types'

import axios from 'axios'
import { get } from 'https';

export const getDetail = (type, param) {
  return dispatch => {
    dispatch(getDetailLoading)
    axios.get(`https://swapi.co/api/${type}/${param}`)
      .then(function (response) {
        let filmList = response.data.films
        dispatch(getDetailSuccess(response.data))
      })
      .catch(function (err) {
        dispatch(getDetailError(err.message))
      })
  }
}

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