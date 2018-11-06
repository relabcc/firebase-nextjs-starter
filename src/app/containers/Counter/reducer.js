import { fromJS } from 'immutable';
import { createActions, handleActions, combineActions } from 'redux-actions';

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

const { increment, decrement } = createActions({
  INCREMENT: () => ({ amount: 1 }),
  DECREMENT: () => ({ amount: -1 })
});

const initialState = fromJS({ count: 0 });

const reducer = handleActions({
  [combineActions(increment, decrement)](state, { payload: { amount } }) {
    return state.set('count', state.get('count') + amount);
  }
}, initialState);

export {
  increment,
  decrement,
};

export default reducer;
