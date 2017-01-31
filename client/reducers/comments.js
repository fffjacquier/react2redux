function comments (state = [], action) {
  if (typeof action.postId !== undefined) {
    return {
      ...state,
      // Object.assign ([], state),
      [action.postId]: postcomments(state[action.postId], action)
    }
  }
}

function postcomments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        username: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
}

export default comments
