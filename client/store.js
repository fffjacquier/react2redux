import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import route reducer
import rootReducer from './reducers/index'

import insta from './data/query'
import instacomments from './data/instacomments'

// create an objectfor default data
const defaultState = {
  posts: insta,
  comments: instacomments
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
