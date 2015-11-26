var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
		return {
			like:false,
			signIn:true,
			showErr:false,
			err_info:'',
			b:[1,2,3,4,5,6,7,8,9]
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
	handSignUp:function(e){
		this.render=this.pwd;
		this.setState({showErr:false});
		return this.state.signIn?this.setState({signIn:false}):this.setState({signIn:true});
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
	passwordKey:{
		key:[],
		status:false,
		setKey:function(key){
			this.key.push(key);
		},
		hasKey:function(key){
			if(this.key.some(function(item,index,arry){
				return item == key;
			})) 
			return true;
			else{
				this.setKey(key);
				return false;
			}
		}
	},
	handlePwdSec:function(e){
		if(!this.passwordKey.status) return;
		if(this.passwordKey.hasKey(e.target.getAttribute('value'))) return;
		//console.log(this.passwordKey.key);
		
	},
	handlePwdStart:function(e){
		this.passwordKey.status=true;
		this.passwordKey.hasKey(e.target.getAttribute('value'));
		this.lineDate.startPoint={
			x:e.pageX,
			y:e.pageY
		};
		//console.log(e.pageX+'---'+e.pageY);
		
	},
	handleResetPwd:function(){
		this.passwordKey.status=false;
	},
	lineDate:{
		startPoint:{
			x:0,
			y:0
		}
	},
	handleDrawLine:function(e){
		if (!this.passwordKey.status) return;
		var bx=e.pageX - this.lineDate.startPoint.x,
		by=e.pageY - this.lineDate.startPoint.y;
		console.log(bx+'---'+by);
	},
	render:function(){
		var display = this.state.showErr ? 'show' : 'hide',
		 rule={};
		rule= this.state.signIn?{placeholder:'enter your name',title:'without',signAs:'sign up',btn_text:'Next'}:{placeholder:'sign up name',title:'hava a',signAs:'sign in',btn_text:'Sign Up'};
		return (
			<div className='login-box'>
				<input onChange = {this.handleInput} placeholder={rule.placeholder}/>
				<button onClick={this.handleNextStep}>{rule.btn_text}</button>
				<div ><span className={display}>{this.state.err_info}</span></div>
				<p><span>{rule.title} account ?</span><span onClick={this.handSignUp} className='sign-sa'>{rule.signAs}</span></p>
			</div>
		);
	},
	pwd:function(){
		var bb=[1,2,3,4,5,6,7,8,9],t=this;
		return(
			<div className='login-box pwd-box' onMouseUp={this.handleResetPwd} onMouseMove={this.handleDrawLine}>
				{bb.map(function(value,index,arry){
					return <span className='prohibitSelect' onMouseEnter={t.handlePwdSec} onMouseDown={t.handlePwdStart} value={value}></span>
				})}
			</div>
		)
	}
});