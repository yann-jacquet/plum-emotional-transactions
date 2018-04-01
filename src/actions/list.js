import makeActionCreator from './makeActionCreator'

/* Action types */
export const CHANGE_EMOTION = 'CHANGE_EMOTION'

/* Action creators */
export const changeEmotion = makeActionCreator(CHANGE_EMOTION, 'transactionId')

/* Thunk action creators */
/* API call to mock here later */
