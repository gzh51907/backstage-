import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,HashRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import Home from "@/static/Home"
import Login from "@/static/subassembly/Login.js";

render(
    <HashRouter>
        <Home/>
    </HashRouter>,
    document.getElementById('app')
)