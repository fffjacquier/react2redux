import React from 'react'
import { render } from 'react-dom'

// import {connect} from 'react-redux'
import App from './components/App'
import Singlephoto from './components/Singlephoto'
import Photogrid from './components/Photogrid'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import css from './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} name='React-o-matic'>
        <IndexRoute component={Photogrid} />
        <Route path='/view/:postId' component={Singlephoto} />
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))

/* const mapStateToProps = (state) => {
  return {
    name: state.name
  }
} */

// export default connect(mapStateToProps)(Main)
