import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lowerCase, upperFirst } from 'lodash'

import sortDate from '../../../utils'
import { emotionsList } from '../utils/emotionMatcher'

import SearchButton from '../button/SearchButton'
import FilterButton from '../button/FilterButton'
import TransactionItem from '../transactionItem/TransactionItem'

import styles from './TransactionList.css'

class TransactionList extends Component {
  constructor() {
    super()

    this.state = {
      filter: null,
      search: '',
    }
    this.handleSearchAndFilter = this.handleSearchAndFilter.bind(this)
  }

  handleSearchAndFilter() {
    const { filter, search } = this.state
    const { transactions } = this.props
    if (filter && !search) return transactions.filter(transaction => transaction.emotion === filter)
    if (search && !filter) return transactions.filter(transaction => lowerCase(transaction.description).includes(search))
    if (filter && search) {
      return transactions.filter(transaction => (transaction.emotion === filter && lowerCase(transaction.description).includes(search)))
    }
    return transactions
  }

  render() {
    const { onEmotionChange } = this.props
    const { filter } = this.state
    const transactionsListDisplay = sortDate(this.handleSearchAndFilter())

    return (
      <section className={styles.sectionList}>
        <FilterButton
          label={(filter && filter !== 'all') ? upperFirst(filter) : 'Emotions'}
          onItemClick={(value) => this.setState({ filter: value !== 'all' ? value : null })}
          options={[{ value: 'all', label: upperFirst('all') }, ...emotionsList.map(emo => ({ value: emo, label: upperFirst(emo) }))]}
          className={styles.filter}
        />
        <div className="row">
          <div className="col-sm-4">
            <div className={['box', styles.search].join(' ')}>
              <SearchButton onChange={(value) => this.setState({ search: lowerCase(value) })} />
            </div>
          </div>
          <div className="col-sm-8">
            <div className={['box', styles.stats].join(' ')}>
              <p>{transactionsListDisplay.length} transactions in your feed</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="box">
              <ul className={styles.list}>
                {transactionsListDisplay.map(transaction => (
                  <TransactionItem key={transaction.id} transaction={transaction} onEmotionChange={onEmotionChange} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  onEmotionChange: PropTypes.func.isRequired,
}

export default TransactionList
