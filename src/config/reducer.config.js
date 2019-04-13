import { combineReducers } from 'redux';
// import { stat } from 'fs';

const reducerText = (state = {
    reducerText: {
        count: 0
    }
}, action) => {
    console.log(state);
    switch (action.type) {
        case 'INCREASE': return { count: state.reducerText.count + action.count };
        case 'DECREASE': return { count: state.reducerText.count - action.count };
        default: return state;
    }
}

// const reducerText2 = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREASE': return { count: state.count + action.count };
//         case 'DECREASE': return { count: state.count - action.count };
//         default: return state;
//     }
// }

const reducerHome = combineReducers({
    reducerText,
});

// const reducerHome = reducers => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key](state[key], action);
//                 return nextState;
//             }, {});
//     };
// };



export default reducerHome;

