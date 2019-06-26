import React from 'react';
import './Admin.css';


class Admin extends React.Component {
    render() {
        return (
            <div className='Admin'>
                <header>
                    <h1>Employee List</h1>
                    <button>Home</button>
                </header>
                <div className='table-header'>
                    <div className='show-entries'>
                        <p>Show</p>
                        <button>5</button>
                        <p>entries</p>
                    </div>
                    <div className='filters'>
                        <ul className='input-filters'>
                            <li className='input-filter'>
                                <p>Status</p>
                                <button>Any</button>
                            </li>
                            <li className='input-filter'>
                                <p>Location</p>
                                <button>All</button>
                            </li>
                            <li className='input-filter'>
                                <p>Name</p>
                                <input></input>
                            </li>
                        </ul>
                    </div>
                    <button className='search'>Search</button>
                </div>
                <div className='table-container'>
                    <table class='table table-striped'>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='table-footer'>
                    <div className='footer-entries'>

                    </div>
                    <div className='footer-pages'>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* <Navbar navbar={{header: "Employee Viewer", isHome: false}}/> */}
            </div>
        )
    }
}

export default Admin;