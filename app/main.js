var React = require('react');
require('./app/less.less');
/*var Hello = require('./component.jsx');
React.render(<Hello name="Nate" />,document.getElementById('app'));*/
var TickTock = require ('./component.jsx');
var a=123;
React.render(
  <TickTock className='zony'/>,
  document.getElementById('app')
);