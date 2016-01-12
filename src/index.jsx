var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./components/Greeting.jsx');
require('./index.css');

ReactDOM.render(<Greeting name='World' />, document.getElementById('app'));
