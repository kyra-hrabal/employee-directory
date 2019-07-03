import React from 'react';
import '../css/App.css';
import EmployeeCard from './EmployeeCard';
import Navbar from './Navbar';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className='employee-list'>
            <Navbar navbar={{header: 'Employee Viewer', isHome: true}}/>
            <div className='carousel slide' data-ride='carousel'>
                <div className='carousel-inner'>
                    <div className ='carousel-item active'>
                        <div className='row justify-content-center'>
                            <EmployeeCard />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        );
    }
}

export default EmployeeList;
