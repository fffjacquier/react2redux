import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Singlephoto extends Component {
  render () {
    // need index of the post, the post too
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[post.code] || []
    return (
      <div className='single-photo'>
        <Photo idx={i} post={post} pic={post.display_src} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Singlephoto
