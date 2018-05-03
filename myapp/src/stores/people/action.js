import {GET_ALL_PEOPLE, CLEAR_PEOPLE_LIST} from '../action.type'

export const getAllPeople = (people) => ({
  type: 'GET_ALL_PEOPLE',
  payload: people
})

export const clearPeople =  () => ({
  type: 'CLEAR_PEOPLE_LIST'
})