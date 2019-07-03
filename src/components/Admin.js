import React from 'react';
import '../css/Admin.css';
import { Dropdown, Button, Form }  from 'react-bootstrap';
import EmployeeTableEntry from './EmployeeTableEntry';
import Modal from 'react-bootstrap/Modal';

// Import mock employee data
var data = require('../employees.json');
console.log(data);
var allEmployees=data.employees;
console.log(allEmployees);

 // Filter employee locations for unique list
const locationsList = [...new Set(allEmployees.map(item => item.location))];

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            filter: '',
            showModal: false,
            employees: allEmployees
        };
        this.name = React.createRef();
        this.location = React.createRef();
        this.title = React.createRef();
        this.description = React.createRef();
        this.image = React.createRef();

        this.selectLocation = this.selectLocation.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    // Called when user selects location from dropdown
    selectLocation(loc) {
        this.setState({location: loc});
        console.log('SELECTED:' + loc);
    }
    
    // Searches for emplyees by given string
    onSearch(event) {
        console.log(this.input.value)
        this.setState({ filter: this.input.value });
        event.preventDefault()
    }

    // Shows the employee modal
    handleShow() {
        this.setState({ showModal: true });
    }

    // Closes the employee modal
    handleClose() {
        this.setState({ showModal: false });
    }

    // Adds a new employee to our existing array
    addEmployee() {
        const name = this.name.current.value;
        const location = this.location.current.value;
        const title = this.title.current.value;
        const description = this.description.current.value;
        const image = this.image.current.value;
        console.log('Name entered: ' + name);
        console.log('Location entered: ' + location);
        console.log('Title entered: ' + title);
        console.log('Description entered: ' + description);
        console.log('Image entered: ' + image);

        // Add the new employee to allEmployees
        var newEmployee = {
            'name': name,
            'description': description,
            'image': '/img/' + image,
            'location': location,
            'title': title
        }
        allEmployees.push(newEmployee);
        this.handleClose();

        // Wanted to rewrite to .json but not possible from browser
        // var json = JSON.stringify(newData);
        // var fs = require('browserify-fs');
        // fs.writeFile('newemployees.json', json, 'utf8', function(err) {
        //     if (err) throw err;
        //     console.log('complete');
        // });
    }

    render() {
        return (
            <div className='Admin'>
                <header>
                    <h1>Employee List</h1>
                    <button className='btn btn-light' href="/home">Home</button>
                </header>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={this.name} placeholder="Enter employee name" />
                        </Form.Group>
                        <Form.Group controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control ref={this.location} placeholder="Location" />
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={this.title} placeholder="Enter employee title"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref={this.description} placeholder="A fun description of the employee"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image Name</Form.Label>
                            <Form.Control ref={this.image} placeholder="Filename for employee image"></Form.Control>
                            <Form.Text>Note: Image must be placed in the employee-directory/public/img folder</Form.Text>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={() => this.addEmployee()}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                            <li className='input-filter' key='addEmployee'>
                                <Button variant='primary' onClick={this.handleShow}>
                                    Add Employee
                                </Button>
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
                            <li className='input-filter' key='search'>
                                <form className='form-inline' onSubmit={this.onSearch}>
                                    <input className='form-control'type="text" placeholder="Search for..." ref={(input) => this.input = input} />
                                    <input className='btn btn-primary' type="submit" value="Search" />
                                </form>
                            </li>
                        </ul>
                    </div>
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
                            <EmployeeTableEntry location={this.state.location} filter={this.state.filter}/>                          
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Admin;