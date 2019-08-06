import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  // const id = 2;
  // const newArray = [...state.results]; // Objects still going to be pointers
  // newArray.splice(id, 1)
  const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter() returns new array
  return updateObject(state, {results: updatedArray});
} 

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.value})});
    case actionTypes.DELETE_RESULT:
      deleteResult(state, action);
    default: 
      return state;
  }
};

export default resultReducer;