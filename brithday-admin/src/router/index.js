import React from 'react';
import {HashRouter, Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import {routesRemake} from "../untils/router_extend";
let routers = [{
    path:'/',
    component: () => import('../App'),
    routes:[
        {
            path:'/',
            exact:true,
            redirect:'/login',
        },
        {
            path:'/main',
            component: () => import('../views/main-content.jsx'),
            routes:[
                {
                    path:'/main/',
                    exact:true,
                    redirect:'/main/usersAdmin',
                },
                {
                    path:'/main/usersAdmin',
                    exact:true,
                    component: () => import('../views/usersAdmin.jsx'),
                },

                {
                    path:'/main/usersAdmin/:account',
                    exact:true,
                    component:()=>import('../views/UserDetail.jsx'),
                },
            ]
        },
        {
            path:'/login',
            exact:true,
            component:()=>import('../views/login.jsx')
        },
        {
            path:'/register',
            exact:true,
            component:()=>import('../views/register.jsx')
        }

    ]
}]
const Router = ()=>(
    <HashRouter>
        <Switch>
            {renderRoutes(routesRemake(routers))}
        </Switch>
    </HashRouter>
)
export default Router
