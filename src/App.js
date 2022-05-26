import React from 'react';
import {useSelector} from "react-redux";
import './App.css'
import Header from "./components/header/header";
import Todo from "./components/todo/todo";
import 'antd/dist/antd.css'
const App = () => {
    const stateTodo = useSelector(state => state.todo)
    return (
        <div className={'container'}>
            <Header/>
            {stateTodo.map(todo =>
                <Todo key={todo.id} id={todo.id} title={todo.title} complete={todo.isComplete}/>
            )}
        </div>
    );
};

export default App;
