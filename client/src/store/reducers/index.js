import { combineReducers } from 'redux';

// Reducers
import recipesReducer from './recipes-reducer';

// Combine Reducers
var reducers = combineReducers({
    recipesState: recipesReducer
});

export default reducers;