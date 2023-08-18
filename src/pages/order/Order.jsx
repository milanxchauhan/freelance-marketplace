import React from 'react'
import "./Order.scss"

const Order = () => {

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    return (
        <div className='order'>
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig2</td>
                        <td>88</td>
                        <td>124</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig3</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig4</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig5</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><img className='img' src="/img/gig.png" alt="" /></td>
                        <td>Gig6</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>           
        </div>
    )
}

export default Order