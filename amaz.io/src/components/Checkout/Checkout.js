import React from 'react';
import NavBar from './../NavBar/NavBar';
import './Checkout.css'

// const Checkout = (props, order) => {
//     const checkoutTable = props.order.map(( product) => {
//         return (
//         <div>
//             <table className='centered'>
//                  <thead>
//                      <tr>
//                          <th data-field='name'>Name</th>
//                          <th data-field='price'>Price</th>
//                          <th className='quantity'>Quantity</th>
//                      </tr>
//                  </thead>

//                  <tbody>
                    
//                         <tr className='details'>
//                             <td>{product.name}<p>Hi</p></td>
//                             <td>{product.price}</td>
//                             <td>what's up</td>
//                         </tr>
//                 </tbody>
//             </table>
//         </div>
//         )
//     } 
//     );
    
//     return (
//         <div>
//             <NavBar />
//             <h4> Check-Out</h4>
//             {checkoutTable}
//         </div>
//     )
// }



const Checkout = ({order}) => {
    return (
        <div>
            <NavBar />
                <h4>Check-Out</h4>
            <div>
                <table className='centered'>
                    <thead>
                        <tr>
                            <th data-field='name'>Name</th>
                            <th data-field='price'>Price</th>
                            <th className='quantity'>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.map((product) => (
                            <tr key={product._id} className='details'>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>what's up</td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checkout;