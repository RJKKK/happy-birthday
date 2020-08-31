import React, {lazy} from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import App from "../App";
import MainContent from "../views/main-content.jsx";
import UsersAdmin from '../views/usersAdmin.jsx'
import UserDetail from '../views/UserDetail.jsx'
const routers = [{
    path:'/',
    component:lazy(()=>import('../App')),
    indexRoute:{},
    routes:[
        {
            path:'/main',
            component:lazy(()=>import('../views/main-content.jsx'))
        },
    ]
}]
const Router = ()=>(
    <HashRouter>
        <Switch>
            <Route path={'/'} component={()=>(
                <App>
                    <Route exact path={'/'} component={()=>(<Redirect to={'/main'} />)} />
                    <Route path={'/main'} component={()=>(
                        <MainContent>
                            <Route exact path={'/main/'} component={()=>(<Redirect to={'/main/usersAdmin'} />)} />
                            <Route exact path={'/main/usersAdmin'} component={UsersAdmin} />
                            <Route exact path={'/main/usersAdmin/:account'} component={UserDetail} />
                        </MainContent>
                    )}/>
                </App>)
            } />
        </Switch>
    </HashRouter>
)
export default Router
