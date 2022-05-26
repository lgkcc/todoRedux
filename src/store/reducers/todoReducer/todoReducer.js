import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from "./actionCreators";

const initialState = [
    {id: 1, title: 'React', isComplete: false},
    {id: 2, title: 'Redux', isComplete: false},
    {id: 3, title: 'TypeScript', isComplete: false},
    {id: 4, title: 'JavaScript', isComplete: false}
]
export const todoReducer = (state = initialState, {type, payload} ) => {
    switch (type){
        case ADD_TODO:
            return[...state,{
                id: payload.id,
                title: payload.title,
                isComplete: false
            }]
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === payload ? {...todo, isComplete: !todo.isComplete} : todo
            )
        case REMOVE_TODO:
             return state.filter(state => state.id !== payload)
        default:
            return state
    }
}
