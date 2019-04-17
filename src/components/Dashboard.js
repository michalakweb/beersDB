import React from 'react';
import { Link } from "react-router-dom";
import Test from './Test';

const Dashboard = () => (
    <div>
        <h1>Welcome to the dashboard</h1>
        <Link to='/counter'>Go to counter</Link>
        <Test />
    </div>
);

export default Dashboard;