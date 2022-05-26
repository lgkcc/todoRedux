import React from 'react';
import classes from "./todo.module.css";
import ui from "../../ui/ui.module.css"
//import Button from "../../ui/button";
import {completeTodoAction, removeTodoAction} from "../../store/reducers/todoReducer/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {CheckOutlined, DeleteOutlined, CloseOutlined} from '@ant-design/icons';

const Todo = ({title, complete, id}) => {
    const stateTodo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const removeTodo = todo => {
        dispatch(removeTodoAction(todo))
    }
    const competeTodo = todo => {
        dispatch(completeTodoAction(todo))
    }
    const isComplete = complete ? `${classes.title} ${classes.complete}` : classes.title
    return (
        <div className={classes.todo}>
            <div className={isComplete}>{title}</div>
            <div>
                {complete
                    ?
                    <CloseOutlined className={ui.btn} onClick={() => competeTodo(id)}/>
                    :
                    <CheckOutlined className={ui.btn} onClick={() => competeTodo(id)}/>
                }
                <DeleteOutlined onClick={() => removeTodo(id)} className={ui.btn}/>
            </div>
        </div>
    );
};

export default Todo;
