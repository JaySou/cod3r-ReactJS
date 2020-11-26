import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React  from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../template/logo/logo'
import Nav from '../template/nav/nav'
import Footer from '../template/footer/footer'
import Routes from './routes'

export default props => (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>

)