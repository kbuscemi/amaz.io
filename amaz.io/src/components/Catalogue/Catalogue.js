import React from 'react';
import './catalogue.css';
import NavBar from './../NavBar/NavBar';


const Catalogue = (props) => {    
    const productTable = props.products.map((product, idx) => {
        return (
            <div key={idx}>
                <div className="row">
                    <div className="col m5"><p>{product.name}</p></div>
                    <div className="col m5"><p>${product.price}</p></div>
                    <div className="col m5"><p>{product.sku}</p></div>
                    <div className="col m5"><p>{product.description}</p></div>
                    <div className="col m5"><button className="material-icons addButton"
                            onClick={() => props.addItem(product._id)} 
                            id={product._id}
                            product={product}
                            >add</button>
                        <i className="material-icons removeButton">close</i></div> 
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
                    <div className="col m3 columnHeaders"><h5>Name</h5></div>
                    <div className="col m3 columnHeaders"><h5>Price</h5></div>
                    <div className="col m3 columnHeaders"><h5>SKU</h5></div>
                    <div className="col m3 columnHeaders"><h5>Description</h5></div>
                    <div>{productTable}</div>
                </div>
            </div>
      </div>
    )
}

export default Catalogue;