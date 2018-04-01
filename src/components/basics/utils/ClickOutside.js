import React from 'react'
import PropTypes from 'prop-types'

/* eslint react/no-string-refs: 0 */
class ClickOutside extends React.Component {
  constructor() {
    super()

    this.isOutside = false
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown, false)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown, false)
  }

  handleMouseDown(e) {
    const { onClickOutside } = this.props
    const element = this.refs.clickOutsideContainer

    if (element && !element.contains(e.target)) this.isOutside = true
    else this.isOutside = false

    if (this.isOutside) onClickOutside(e)
  }

  render() {
    const { children } = this.props

    return (
      <span ref="clickOutsideContainer">
        {children}
      </span>
    )
  }
}

ClickOutside.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ClickOutside
