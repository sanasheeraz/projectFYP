import { createStore, applyMiddleware } from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware  from 'redux-saga'
import rootReducers from './rootReducers';
import rootSaga from './rootSaga';
import logger from 'redux-logger'

const sagaMiddleware =  createSagaMiddleware();

const store = createStore(
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(rootSaga)

export default store