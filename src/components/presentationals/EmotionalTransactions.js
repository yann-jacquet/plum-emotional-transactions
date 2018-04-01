import React from 'react'
import PropTypes from 'prop-types'

const EmotionalTransactions = ({ changeEmotion, list }) => (
  <div
    onClick={() => changeEmotion('id')}
    onKeyPress={(e) => console.log(e)}
  >
    All components below <span>{list}</span>
  </div>
)

EmotionalTransactions.propTypes = {
  changeEmotion: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default EmotionalTransactions
