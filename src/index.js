import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App'; 

// 比如设计师给的尺寸是375的然后字体大小是100 ，我们就把750/100
document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px";

ReactDOM.render(<App />, document.getElementById('root'));

