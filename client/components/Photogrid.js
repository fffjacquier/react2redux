import React, { Component } from 'react'
import Photo from './Photo'

class Photogrid extends Component {
  render () {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) => <Photo {...this.props} post={post} key={i} idx={i} />)}
      </div>
    )
  }
}

export default Photogrid
