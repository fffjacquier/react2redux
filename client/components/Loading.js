import React from 'react'
var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
}

class Loading extends React.Component {
  getDefaultProps () {
    return {
      text: 'Loading',
      speed: 300
    }
  }
  getInitialState () {
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  }
  componentDidMount () {
    var stopper = this.originalText + '...'
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.content}>{this.state.text}</div>
      </div>
    )
  }
}

Loading.propTypes = {
  speed: React.PropTypes.number,
  text: React.PropTypes.string
}

export default Loading
