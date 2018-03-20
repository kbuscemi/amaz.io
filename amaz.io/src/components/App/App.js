import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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
        }
    }

    addItem = (id) => {
        fetch("api/orders", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                id: id 
            })
        })
    //     .then(() => console.log('yay') )
    //   .catch(err => console.log(err))
        .then(data => data.json())
        .then((order) => {
            this.setState = {
            order: order
            }
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        fetch("api/products")
            .then(res => res.json())
            .then(products => this.setState({products}))
            .catch(err => console.log(err))
        
        fetch("api/orders")
            .then(res => res.json())
            .then(order => this.setState({order}))
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
                    addItem={this.addItem} />
                    } />
                <Route exact path='/checkout' render={() => 
                    <Checkout order={this.state.order} /> 
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;