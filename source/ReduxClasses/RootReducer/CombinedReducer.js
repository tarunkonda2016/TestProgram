import {combineReducers} from 'redux';
import PizzaCalculate from '../Reducers/PizzaCalculateReducer';

export default function rootReducer() {
  return combineReducers({
    PizzaCalculate,
  });
}
