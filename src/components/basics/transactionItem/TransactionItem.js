import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import EmotionSelector from '../button/EmotionSelector'

import styles from './TransactionItem.css'

const TransactionItem = ({ transaction, style, onEmotionChange }) => (
  <li className={['row', styles.transaction].join(' ')} style={style}>
    <div className="col-sm-2">
      <div className="box">
        <p className="italic">{moment(transaction.created).format('MMM Do YY')}</p>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="box">
        <p>{transaction.description}</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="box">
        <p>{transaction.note}</p>
      </div>
    </div>
    <div className={['col-sm-3', styles.amount].join(' ')}>
      <div className="box">
        <p>{Math.round(transaction.amount).toFixed(2)}&nbsp;{transaction.currency === 'GBP' ? '£' : '€'}</p>
      </div>
    </div>
    <div className={styles.transactionEmotion}>
      <EmotionSelector emotion={transaction.emotion} onChange={(emo) => onEmotionChange(transaction.id, emo)} className={styles.emoji} />
    </div>
  </li>
)

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  onEmotionChange: PropTypes.func.isRequired,
  style: PropTypes.object,
}

TransactionItem.defaultProps = {
  style: {},
}

export default TransactionItem
