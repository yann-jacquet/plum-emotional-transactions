import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ClickOutside from '../utils/ClickOutside'

class FilterButton extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { label, options, onItemClick } = this.props
    const { isOpen } = this.state

    const optionsList = (
      <ul>
        {options.map(option => (
          <li key={option.value} onClick={() => onItemClick(option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    )

    return (
      <ClickOutside onClickOutside={() => this.setState({ isOpen: false })}>
        <button type="button" onClick={() => this.setState({ isOpen: !isOpen })}>
          {label}
          {isOpen && optionsList}
        </button>
      </ClickOutside>
    )
  }
}

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default FilterButton
