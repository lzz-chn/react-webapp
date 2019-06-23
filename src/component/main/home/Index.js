import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }
    render() {
        return (
            <div className="main">
                <h1>Built for developers</h1>
                <div className="banner">banner</div>
                <div className="list">
                    <h2>
                        <span>title</span><Link to="xxx">more</Link>
                    </h2>
                    <ul>
                        <li>
                            <Link to="xxx/1" >Content1</Link>
                        </li>
                        <li>
                            <Link to="xxx/2" >Content2</Link>
                        </li>
                        <li>
                            <Link to="xxx/3" >Content3</Link>
                        </li>
                        <li>
                            <Link to="xxx/4" >Content4</Link>
                        </li>
                        <li>
                            <Link to="xxx/5" >Content5</Link>
                        </li>
                        <li>
                            <Link to="xxx/6" >Content6</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Index;
