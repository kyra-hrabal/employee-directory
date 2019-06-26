import React from 'react';
import './Navbar.css';


class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <h1>{this.props.navbar.header}</h1>
                {
                    this.props.navbar.isHome ?
                    <ul className='nav nav-tabs'>
                        <li class='nav-item'>
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class='nav-item'>
                            <a class="nav-link" href="/admin">Admin</a>
                        </li>
                    </ul> :
                    <ul className='nav nav-tabs'>
                        <li class='nav-item'>
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class='nav-item'>
                            <a class="nav-link active" href="/admin">Admin</a>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}

export default Navbar;