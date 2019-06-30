import React from 'react';
import '../css/Admin.css';
import Dropdown from 'react-bootstrap/Dropdown';
import EmployeeTableEntry from './EmployeeTableEntry';

// Import mock employee data
var data = require('../employees.json');
console.log(data);
var employees=data.employees;
console.log(employees);

 // Filter employee locations for unique list
const locationsList = [...new Set(employees.map(item => item.location))];

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Saint Petersburg, FL',
        };
        this.selectLocation = this.selectLocation.bind(this);
    }
    // Called when user selects location from dropdown
    selectLocation(loc) {
        this.setState({location: loc});
        console.log('SELECTED:' + loc);
    }
    render() {
        return (
            <div className='Admin'>
                <header>
                    <h1>Employee List</h1>
                    <button className='btn btn-light'>Home</button>
                </header>
                <div className='table-header'>
                    <div className='show-entries'>
                        <p>Show</p>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            5
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">1</a>
                            <a className="dropdown-item" href="#">2</a>
                            <a className="dropdown-item" href="#">3</a>
                            <a className="dropdown-item" href="#">4</a>
                            <a className="dropdown-item active" href="#">5</a>
                        </div>
                        <p>entries</p>
                    </div>
                    <div className='filters'>
                        <ul className='input-filters'>
                            <li className='input-filter' key='statusDropdown'>
                                <p>Status</p>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                    Any
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">1</a>
                                    <a className="dropdown-item" href="#">2</a>
                                    <a className="dropdown-item" href="#">3</a>
                                    <a className="dropdown-item" href="#">4</a>
                                    <a className="dropdown-item active" href="#">5</a>
                                </div>
                            </li>
                            <li className='input-filter' key='locationDropdown'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Location
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {locationsList.map( loc => 
                                        <Dropdown.Item onSelect={() => this.selectLocation(loc)}>{loc}</Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                            </li>
                            <li className='input-filter' key='nameSearch'>
                                <p>Name</p>
                                <input></input>
                            </li>
                        </ul>
                    </div>
                    <button className='search'>Search</button>
                </div>
                <div className='table-container'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmployeeTableEntry location={this.state.location}/>                          
                        </tbody>
                    </table>
                </div>
                <div className='table-footer'>
                    <div className='footer-entries'>

                    </div>
                    <div className='footer-pages'>
                        <nav>
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;