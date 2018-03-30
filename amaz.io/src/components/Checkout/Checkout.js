import React from 'react';
import NavBar from './../NavBar/NavBar';
import './Checkout.css'

const Checkout = ({products, order}) => {
    return (
        <div>
            <NavBar />
                <h4>Check-Out</h4>

            <table className='centered'>
                <thead>
                    <tr>
                        <th data-field='name'>Name</th>
                        <th data-field='price'>Price</th>
                        <th className='quantity'>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(order) && order.map((product, idx) =>
                        <tr key={idx} className='details'>
                            <td>{product.name}<p>Hi</p></td>
                            <td>{product.price}</td>
                            <td>what's up</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Checkout;