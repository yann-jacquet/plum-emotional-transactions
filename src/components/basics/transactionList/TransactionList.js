import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchButton from '../button/SearchButton'
import TransactionItem from '../transactionItem/TransactionItem'

import styles from './TransactionList.css'

class TransactionList extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { transactions, onEmotionChange } = this.props

    return (
      <section>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <SearchButton onChange={() => { }} />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="box">
              <p>{transactions.length} transactions on your feed</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="box">
              {transactions.filter().map(transaction => (
                <TransactionItem transaction={transaction} onEmotionChange={onEmotionChange} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.object.isRequired,
  onEmotionChange: PropTypes.func.isRequired,
}

export default TransactionList
