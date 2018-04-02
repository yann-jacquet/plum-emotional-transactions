import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ClickOutside from '../utils/ClickOutside'

import styles from './Button.css'

class SearchButton extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
      inputValue: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleOnChange(e) {
    const { onChange } = this.props

    onChange(e.target.value)
    this.setState({ inputValue: e.target.value })
  }

  handleClickOutside() {
    const { isOpen, inputValue } = this.state
    if (isOpen && !inputValue) this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state

    return (
      <ClickOutside onClickOutside={() => this.handleClickOutside()}>
        {isOpen
          ? <input
            type="text"
            className={['pe-search-input', isOpen ? styles.inputActive : null].join(' ')}
            placeholder="Search"
            onChange={this.handleOnChange}
            autoFocus
          />
          : (
            <button
              className={[styles.btnSearch, isOpen ? styles.searchActive : null].join(' ')}
              type="button"
              onClick={() => this.setState({ isOpen: !isOpen })}
              title="Search in notes"
            >
              <i className="fas fa-search" />
            </button>
          )
        }
      </ClickOutside>
    )
  }
}

SearchButton.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchButton
