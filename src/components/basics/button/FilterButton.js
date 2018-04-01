import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ClickOutside from '../utils/ClickOutside'

import styles from './Button.css'

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
      <ul className={styles.list}>
        {options.map(option => (
          <li className={styles.listItem} key={option.value} onClick={() => onItemClick(option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    )

    return (
      <ClickOutside onClickOutside={() => this.setState({ isOpen: false })}>
        <button
          className={[styles.btn, styles.btnFilter, isOpen ? styles.btnFilterActive : null].join(' ')}
          type="button"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <span className={styles.btnLabel} >
            {label}<i className={['fas', 'fa-angle-down', isOpen ? styles.rotate : null].join(' ')} />
          </span>
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
