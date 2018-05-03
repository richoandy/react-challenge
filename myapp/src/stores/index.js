import { createStore, combineReducers } from 'redux'
import peopleReducers from './people/reducers'
import starshipReducers from './starships/reducers'

const rootReducer = combineReducers({
  people: peopleReducers,
  starships: starshipReducers
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store