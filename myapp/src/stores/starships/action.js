import {GET_ALL_STARSHIPS, CLEAR_STARSHIPS_LIST} from '../action.type'

export const getAllStarships = (starship) => ({
  type: 'GET_ALL_STARSHIPS',
  payload: starship
})

export const clearStarships =  () => ({
  type: 'CLEAR_STARSHIPS_LIST'
})