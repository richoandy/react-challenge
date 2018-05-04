import {
  GET_ALL_PEOPLE_LOADING,
  GET_ALL_PEOPLE_ERROR,
  GET_ALL_PEOPLE_SUCCESS,
  CLEAR_PEOPLE_LIST,
  ADD_NEW_PEOPLE} from './action.types'

import axios from 'axios'

export const getAllPeople = (num) => {
  return dispatch => {
    let start = num * 5 - 4
    let end = num * 5
    for ( let i = start; i <= end; i++) {
      const endPoint = `https://swapi.co/api/people/${i}`
      dispatch(getAllPeopleLoading())
      axios.get(endPoint)
        .then( response => {
          dispatch(getAllPeopleSuccess(response.data))
        })
        .catch(err => {
          dispatch(getAllPeopleError(err.message))
        }) 
    }
  }
}

const getAllPeopleLoading = () => ({
  type: GET_ALL_PEOPLE_LOADING
})

const getAllPeopleError = (err) => ({
  type: GET_ALL_PEOPLE_ERROR,
  message: err
})

const getAllPeopleSuccess = (payload) => ({
  type: GET_ALL_PEOPLE_SUCCESS,
  payload: payload
})

export const addNewPeople = (people) => ({
  type: ADD_NEW_PEOPLE,
  payload: people
})

export const clearPeople =  () => ({
  type: CLEAR_PEOPLE_LIST
})