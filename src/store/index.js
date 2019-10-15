import { createStore } from 'redux';

const INITIAL_STATE = {
    data:[
        'React Native',
        'ReactJS',
        'NodeJS'
    ],
};

// https://www.youtube.com/watch?v=7L7MhxjI4PE&t=151s
// Recebe o estado anterior e uma
function courses(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_COURSE':
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}


const store = createStore(courses);
export default store;
