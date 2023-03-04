import { spawn } from 'redux-saga/effects'

// Sagas
import AuthSaga from './Auth/saga'

// Export the root saga
export default function* rootSaga() {
  yield spawn(AuthSaga)
}