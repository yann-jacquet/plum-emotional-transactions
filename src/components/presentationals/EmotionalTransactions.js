import React from 'react'
import PropTypes from 'prop-types'

import ProfilInfo from '../basics/profilInfo/ProfilInfo'

const EmotionalTransactions = ({ changeEmotion, list }) => (
  <div className="row center-sm">
    <div className="col-sm-8">
      <div className="box">
        <div
          onClick={() => changeEmotion('id')}
          onKeyPress={(e) => console.log(e)}
        >
          All components below <span>{list}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="box">
            <ProfilInfo picLink="img/avatar.jpg" user={{ firstname: 'Earl', lastname: 'E.Bird', clientId: 58394059321 }} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

EmotionalTransactions.propTypes = {
  changeEmotion: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default EmotionalTransactions
