import React from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import App from "../App";
import MainContent from "../views/main-content.jsx";
import UsersAdmin from '../views/usersAdmin.jsx'
const Routes = ()=>(
    <HashRouter>
        <Switch>
            <Route path={'/'} component={()=>(
                <App>
                    <Route exact path={'/'} component={()=>(<Redirect to={'/main'} />)} />
                    <Route path={'/main'} component={()=>(
                        <MainContent>
                            <Route exact path={'/main/'} component={()=>(<Redirect to={'/main/usersAdmin'} />)} />
                            <Route exact path={'/main/usersAdmin'} component={UsersAdmin} />
                        </MainContent>
                    )}/>
                </App>)
            } />
        </Switch>
    </HashRouter>
)
export default Routes
