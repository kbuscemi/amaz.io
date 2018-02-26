import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome.js';
import Catalogue from './catalogue.js';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: 0
        }
    }

    componentDidMount() {
        fetch("/api/products")
            .then(res => res.json())
            .then(products => this.setState({products}))
            .catch(err => console.log(err))
            
    }

    render() {
        return (
            <div>
                <Switch>
                <Route exact path='/' render={() => <Welcome />} 
                    />
                 <Route exact path='/catalogue' render={() =>
                    <Catalogue products={this.state.products} />
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;