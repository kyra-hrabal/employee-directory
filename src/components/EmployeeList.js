import React from 'react';
import '../css/App.css';
import EmployeeCard from './EmployeeCard';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;
        return (
        <div className='employee-list'>
            <Navbar navbar={{header: 'Employee Viewer', isHome: true}}/>
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}>
                <Carousel.Item>
                    <div className='row justify-content-center'>
                            <EmployeeCard group='1'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row justify-content-center'>
                            <EmployeeCard group='2'/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        );
    }
}

export default EmployeeList;
