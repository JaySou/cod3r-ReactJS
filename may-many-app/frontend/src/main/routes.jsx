import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from '../main/authOrApp'

export default props => (
    <Router  history={hashHistory}>

        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='/billingCycle' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)