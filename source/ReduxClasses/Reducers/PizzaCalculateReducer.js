import PizzaActions from '../Actions/PizzaActions';

const initialState = {
  data: {},
  selected: 'default',
  smallPizzaPrice: 269.99,
  mediumPizzaPrice: 322.99,
  largePizzaPrice: 394.99,
  smallPizzaQuantity: 0,
  mediumPizzaQuantity: 0,
  largePizzaQuantity: 0,
  totalAmount: 0,
};

export default function PizzaCalculateReducer(state = initialState, action) {
  switch (action.type) {
    case PizzaActions.GET_DATA:
      return state;
    case PizzaActions.GET_DATA_SUCCESS:
      return {...state, data: action.data};

    case PizzaActions.SELECTED:
      return {...state, selected: action.data};
    default:
      return state;
  }
}
