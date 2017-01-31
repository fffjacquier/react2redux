import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
  render () {
    const { post, idx, pic } = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            <img src={pic || post.thumbnail_src} alt={post.caption} />
          </Link>
          <ReactCSSTransitionGroup transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>{post.likes}</span>
          </ReactCSSTransitionGroup>
        </div>
        <div className='row control-buttons'>
          <div className='col-xs-6'>
            <button onClick={this.props.increment.bind(null, idx)}>
              {post.likes} &hearts;
            </button>
          </div>
          <div className='col-xs-6 text-right'>
            <Link to={`/view/${post.code}`}>
              <button>
                <span className='glyphicon glyphicon-comment'></span> {post.comments.count}
              </button>
            </Link>
          </div>
          <div className='clearfix'></div>
        </div>
      </figure>
    )
  }
}

export default Photo
