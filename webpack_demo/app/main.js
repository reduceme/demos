/*
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());*/
// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));