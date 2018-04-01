import React from 'react'
import PropTypes from 'prop-types'

import styles from './Avatar.css'

const Avatar = ({ picLink }) => (
  <div className={styles.avatar} style={{ backgroundImage: `url(${picLink})` }} />
)

Avatar.propTypes = {
  picLink: PropTypes.string.isRequired,
}

export default Avatar
