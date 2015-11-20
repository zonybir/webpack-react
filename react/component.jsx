var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
		return {like:false};
	},
	handleClick:function(e){
		if (this.state.like) return true;
		if ( e && e.preventDefault )   e.preventDefault();
		else   window.event.returnValue = false;
		this.setState({like: !this.state.like});
		return false; 
	},
	render:function(){
		var text = this.state.like ? 'like' : 'haven\'t like';
		return (
			<a onClick = {this.handleClick} href={this.props.zul}>
				You {text} this. Clike to toggle.
			</a>
		);
	}
});