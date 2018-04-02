import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition } from 'react-transition-group'

import emotionMatcher, { emotionsList } from '../utils/emotionMatcher'
import ClickOutside from '../utils/ClickOutside'

import styles from './EmotionSelector.css'

class EmotionSelector extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { emotion, onChange, className } = this.props
    const { isOpen } = this.state

    const optionsList = emotionsList.map((emo, index) => (
      <Transition timeout={(index * 1.2) * 100} key={emo}>
        {(state) => (
          <li
            className={[styles.listItem, styles[state]].join(' ')}
            key={emo}
            onClick={() => onChange(emo, state)}
          >
            {emotionMatcher(emo)}
            {console.log(state)}
          </li>
        )}
      </Transition>
    ))

    return (
      <ClickOutside onClickOutside={() => this.setState({ isOpen: false })}>
        <button
          className={[styles.btnEmoji, isOpen ? styles.emojiActive : null, className].join(' ')}
          type="button"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          {emotionMatcher(emotion)}
          <TransitionGroup
            component="ul"
            className={styles.list}
          >
            {isOpen ? optionsList : null}
          </TransitionGroup>
        </button>
      </ClickOutside>
    )
  }
}

EmotionSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  emotion: PropTypes.string.isRequired,
  className: PropTypes.string,
}

EmotionSelector.defaultProps = {
  className: '',
}

export default EmotionSelector
