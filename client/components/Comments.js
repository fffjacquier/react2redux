import React from 'react'

class Comments extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    // console.log(postId, author, comment)
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }
  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.username}: </strong>
          {comment.text}
          <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }
  render () {
    return (
      <div>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
