import React from 'react';
import { Link } from 'react-router-dom';
import './catalogue.css';
import NavBar from './../NavBar/NavBar';


const Catalogue = (props) => {
    const productTable = props.products.map((product, idx) => {
        return (
            <div key={idx}>
                <div className="row headers">
                    <div className="col m5"><p>{product.name}</p></div>
                    <div className="col m5"><p>{product.price}</p></div>
                    <div className="col m5"><p>{product.sku}</p></div>
                    <div className="col m5"><p>{product.description}</p></div>
                    <div className="col m5 button"><button className="material-icons"
                            onClick={() => props.addItem(product._id)} id={product._id}>add</button>
                        <i className="material-icons">remove</i></div> 
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>
              <NavBar />
            </div>
            <div className='headingContainer'>
                <div className="row">
                    <div className="col m4 columnHeaders"><h4>Name</h4></div>
                    <div className="col m4 columnHeaders"><h4>Price</h4></div>
                    <div className="col m4 columnHeaders"><h4>SKU</h4></div>
                    <div className="col m4 columnHeaders"><h4>Description</h4></div>
                    <div>{productTable}</div>
            </div>
          </div>
      </div>
    )
}

export default Catalogue;