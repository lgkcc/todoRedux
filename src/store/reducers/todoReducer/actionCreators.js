export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const addTodoAction = payload => ({type: ADD_TODO, payload})
export const removeTodoAction = payload => ({type: REMOVE_TODO, payload})
export const completeTodoAction = payload => ({type: COMPLETE_TODO, payload})
