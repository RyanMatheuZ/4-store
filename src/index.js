import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import Home from './views/Home'
import Products from './views/Products'
import Login from './views/Login'
import Register from './views/Register'
import Cart from './views/Cart'

import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <App /> } />

			<Route index element={ <Home />} />

			<Route path="/products" element={ <Products /> } />

			<Route path="/login" element={ <Login /> } />

			<Route path="/register" element={ <Register /> } />

			<Route path="/cart" element={ <Cart /> } />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()