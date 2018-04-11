import React from 'react';
import ReactDom from 'react-dom'
// import { render } from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';



// ReactDom.render(<Router><App /></Router>, document.getElementById('root'));
ReactDom.render(<Router><Route component={App} /></Router>, document.getElementById('root'));
