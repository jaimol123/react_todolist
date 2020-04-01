import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import TodoList from './TodoList'


var destination = document.querySelector("#container"); // querySelector is used to add css styling to the selected html element/tag
                                                        //querySelectorAll() to select all elements
ReactDOM.render(
    <div> <TodoList/> </div>,
    destination

);