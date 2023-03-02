import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectState = state => state.AuthReducer || initialState;

// getting the data from the reducer
const makeSelectPostsList = () =>
  createSelector(
    selectState,
    currentState => currentState.posts,
  );


export {
    makeSelectPostsList,
};
