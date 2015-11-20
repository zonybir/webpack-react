var React = require ('react');
module.exports=React.createClass({
	GetInitialState:function(){
		return {
			inputText:'you are not enter any worlds'
		}
	},
	InputChange:function(){
		this.setState({inputText:'you have enter some worlds'});
	},
	render:function(){
		return (
			<div>
				<input type='text' onChange={this.InputChange} placeholder={this.props.val}>
			</div>
		)
	}
})