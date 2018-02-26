import React from 'react';
import { Link } from 'react-router-dom';
import './catalogue.css'


const Catalogue = (props) => {
    const productTable = props.products.map((products, idx) => {
        return (
            <div>
                <div class="row headers" key={idx}>
                    <div class="col m5"><p>{products.name}</p></div>
                    <div class="col m5"><p>{products.price}</p></div>
                    <div class="col m5"><p>{products.sku}</p></div>
                    <div class="col m5"><p>{products.description}</p></div>
                    <div class="col m5 button"><button>Add</button><button>Remove</button></div> 
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <div>
                <Link to="/checkout">Checkout</Link>
            </div>
            <div class="row">
            <div class=" col m12"><input type="textarea" placeholder="search bar" /></div>
                <div class="col m4 columnHeaders"><h4>Name</h4></div>
                <div class="col m4 columnHeaders"><h4>Price</h4></div>
                <div class="col m4 columnHeaders"><h4>SKU</h4></div>
                <div class="col m4 columnHeaders"><h4>Description</h4></div>
                <div>{productTable}</div>
            </div>
        </div>
    )
}

export default Catalogue;