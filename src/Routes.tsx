import React, { FC } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import Project from 'pages/Project'

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/project" />
                <Route path="/project" component={Project} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
