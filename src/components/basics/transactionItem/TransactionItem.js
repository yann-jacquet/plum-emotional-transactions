import React from 'react'
import PropTypes from 'prop-types'

import emotionMatcher from '../utils/emotionMatcher'

import styles from './TransactionItem.css'

const TransactionItem = ({ transaction, className }) => (
  <li className={['row', styles.transaction, className].join(' ')}>
    <div className="col-sm-3">
      <div className="box">
        <p>{transaction.date}</p>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="box">
        <p>{transaction.note}</p>
      </div>
    </div>
    <div className={['col-sm-3', styles.amount].join(' ')}>
      <div className="box">
        <p>{transaction.price}</p>
      </div>
    </div>
    <div className={styles.transactionEmotion}>
      {emotionMatcher(transaction.emotion)}
    </div>
  </li>
)

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  className: PropTypes.string,
}

TransactionItem.defaultProps = {
  className: '',
}

export default TransactionItem
