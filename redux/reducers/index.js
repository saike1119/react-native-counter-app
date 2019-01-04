import {combineReducers} from 'redux';
import {PLUS_COUNTER, MINUS_COUNTER} from '../actions'

const counter = (state = 3, action) => {
    switch (action.type) {
        case PLUS_COUNTER:
            return state + 1;
        case MINUS_COUNTER:
            if(state > 0){
                return state - 1;
            }
            return state;
        default:
            return state
    }
};

const rootReducer = combineReducers({
    counter,
});


export default rootReducer;