import React from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        company: 'Postlight',
        };
    }
    render() {
        return (
        <div className='employee-list'>
            <h1>Employee list for {this.state.company}</h1>
            <div className='row justify-content-center'>
            <EmployeeCard></EmployeeCard>
            </div>
        </div>
        );
    }
}

export default EmployeeList;
