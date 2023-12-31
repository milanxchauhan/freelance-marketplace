import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {
    return (
        <div className='myGigs'>
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add New Gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig2</td>
                        <td>88</td>
                        <td>124</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig3</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig4</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig5</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig6</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.jpg" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGigs