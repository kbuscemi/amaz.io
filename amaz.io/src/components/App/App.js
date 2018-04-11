import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './../Welcome/Welcome';
import Catalogue from './../Catalogue/Catalogue';
import Checkout from './../Checkout/Checkout';
import './App.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            order: [],
            search: ''
        }
    }


    // searchItem = (e) => {
    //     this.setState = {
    //         search: e.target.value.substr(0, 10)
    //     };
    // }

    
    
    addItem = (product) => {
        console.log(product)
        fetch("api/orders", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  product: product
                  
                })
            })
            .then(data => data.json())
            .then((order) => {
                this.setState({ 
                    order
                });
            })
            .catch(err => console.log(err))
        }
        
        componentDidMount() {
            
            fetch("api/products")
            .then(res => res.json())
            .then(products => this.setState({ products }))
            .catch(err => console.log(err))
            
            fetch("api/orders")
                .then(res => res.json())
                .then(order => this.setState({ order }))
                .catch(err => console.log(err))
        }
        
        render() {
            return (
            <div>
                <Switch>
                <Route exact path='/' render={() => <Welcome />} 
                    />
                 <Route exact path='/catalogue' render={() =>
                    <Catalogue 
                    products={this.state.products}
                    addItem={this.addItem}
                    // search={this.state.search} 
                    // searchItem={this.searchItem} 
                    />
                    } />
                <Route exact path='/checkout' render={() => 
                    // this.state.products ?
                        <Checkout 
                        order={this.state.order}
                        /> 
                    // :
                    //     <h4>Loading</h4>
                    } />
                </Switch>
            </div>
        )
    }
}

// export default App;
export default withRouter(App);