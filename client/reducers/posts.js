// reducer takes 2 things: action and copy of current state
// and return the updated store

// impure function: mute something outside the func likes
// state[action.i].likes++

// pure functions: every input makes the same output all the time
// all reducers are running at the same transitionEnterTimeout

function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index
      return [
        ...state.slice(0, i), // before the one updating
        // Object.assign(state[i], { likes: { count: state[i].likes.count + 1 } }),
        Object.assign(state[i], { likes: state[i].likes + 1 }),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default posts
