import PizzaActions from '../Actions/PizzaActions';

export const PizzaActionCreator = {
  getData: () => {
    return {
      type: PizzaActions.GET_DATA,
    };
  },

  getDataSuccess: data => {
    return {
      type: PizzaActions.GET_DATA_SUCCESS,
      data,
    };
  },
};
