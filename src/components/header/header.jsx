import React, {useState} from 'react';
import classes from "./header.module.css";
import ui from "../../ui/ui.module.css"
import Button from "../../ui/button";
import {addTodoAction} from "../../store/reducers/todoReducer/actionCreators";
import {useDispatch} from "react-redux";
import { PlusOutlined } from '@ant-design/icons';

const Header = () => {
    const [fill, setFill] = useState('red')
    const [title, setTitle] = useState('')
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const dispatch = useDispatch()
    const addTodo = todo => {
        const newTodo = {
            id: Date.now(),
            title: todo
        }
        dispatch(addTodoAction(newTodo))
    }
    return (
        <header className={classes.header}>
            <input onChange={(event) => titleChange(event)} className={classes.input} type="text" value={title}/>
            <PlusOutlined onMouseMove={() => setFill('red')} fill={'red'} className={ui.btn} onClick={() => addTodo(title)}/>
        </header>
    );
};

export default Header;
