import { createStore, combineReducers, applyMiddleware } from 'redux'
import peopleReducers from './people/reducers'
import starshipReducers from './starships/reducers'
import filmReducers from './filmDetail/reducers'
import detailReducers from './details/reducers'
import favoriteReducers from './favorites/reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  people: peopleReducers,
  starships: starshipReducers,
  film: filmReducers,
  detail: detailReducers,
  favorite: favoriteReducers
})
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger),
)

export default store