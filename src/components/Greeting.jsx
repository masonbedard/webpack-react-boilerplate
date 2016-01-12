var React = require('react');
require('./Greeting.css');

module.exports = React.createClass({
	render: function() {
		return (
			<div className='Greeting'>
				Hello, {this.props.name}!
			</div>
		);
	}
});
