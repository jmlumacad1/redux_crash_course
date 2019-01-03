import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { FETCH_POSTS, NEW_POST } from './actions/types'

const initialState = {
  posts: [],
  newPost: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        newPost: action.payload
      }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
