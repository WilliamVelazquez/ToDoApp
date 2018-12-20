import React from 'react';
import { render } from 'react-dom';

import ToDoList from '../Components/ToDoList'

const container = document.getElementById('container');

render(<ToDoList />, container);
