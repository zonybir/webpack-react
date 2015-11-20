/*var React = require ('react'),
        ReactDOM = require ('react-dom'),
        Component = require('./conponents.jsx');

 ReactDOM.render(<Component val='play enter some worlds'  \>,document.getElementById('zony') );
*/
var React = require ('react');
var ReactDOM=require ('react-dom');
var Components = require ("./component.jsx");
ReactDOM.render(
  <Components val='http://115.28.222.150' />,  document.getElementById('example')
);