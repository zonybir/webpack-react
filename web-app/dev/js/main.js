var React = require ('react');
var ReactDOM=require ('react-dom');
var Components = require ("./login-component.jsx");
require('../less/base.less'),
require('../less/login.less');
ReactDOM.render(
  <Components pl='enter your name' text='Next'/>,  document.getElementById('zony_app')
);