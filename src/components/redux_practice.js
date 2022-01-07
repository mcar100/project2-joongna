import Data from '../db';


// 1. 액션타입 만들기
const ADD_TO_LIST = 'redux_practice/ADD_TO_LIST';

// 2. 액션 생성함수 만들기
let nextId = 1;
export const addToList = (item) => ({
    type: ADD_TO_LIST,
    todo: {
        id: nextId++,
        item
    }
});

// 3. 초기 상태 선언
const initialState  = [{
    id: 1,
    list: [ ...Data ]
}];

// 4. 리듀서 선언
const adder = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.todo.item)
            };
        default:
            return state;
    }
}

export default adder
