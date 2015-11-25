var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
		return {
			like:false,
			showErr:false,
			err_info:''
		};
	},
	date:{
		userName:''
	},
	handleInput:function(e){
		this.date.userName=e.target.value;		
	},
	handleNextStep:function(){
		if(!this.date.userName) this.setState({showErr:true,err_info:'Please input your name.'});
		else if(!this.checkuserNmae()) var a=0;
	},
	checkuserNmae:function(){
		if(this.date.userName == 'zonybir') {
			this.setState({showErr:false,err_info:''})
			return true;
		}else{
			this.setState({showErr:true,err_info:'Please check your input name !'})
			return false;
		}
	},
	render:function(){
		var display = this.state.showErr ? 'show' : 'hide';
		return (
			<div className='login-box'>
				<input onChange = {this.handleInput} placeholder={this.props.pl} />
				<button onClick={this.handleNextStep}>{this.props.text}</button>
				<div className={display}>{this.state.err_info}</div>
			</div>
		);
	}
});