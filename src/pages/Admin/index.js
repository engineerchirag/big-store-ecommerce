import React, { useState } from 'react';
import { Switch, Route } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import './style.css';
import { AdminHeader, AdminSidebar } from './styles.js';

const header = {
    color: 'red',
};
const Admin = () => {
    const [color, setColor] = useState('red');
    let match = useRouteMatch();
    return (
        <>
            <AdminHeader color={color} onClick={() => setColor('yellow')}>
                Admin Header
                <span className='detail'>Detail</span>
            </AdminHeader>
            <AdminSidebar>Admin Sidebar</AdminSidebar>
            <ul>
                <li>
                    <Link to={`${match.path}/accounts`}> Accounts </Link>
                </li>
                <li>
                    <Link to={`${match.path}/users`}> Users </Link>
                </li>
            </ul>
            
            <Switch>
                <Route path={`${match.path}/accounts`} exact>
                    <h3 styles={header}>Admin accounts</h3>
                </Route>
                <Route path={`${match.path}/users`} exact>
                    <h3>Admin users</h3>
                </Route>
            </Switch>
        </>
    )
};

export default Admin;