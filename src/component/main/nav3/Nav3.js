import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './Nav3.css';
import Nav3Type from '../Nav3Type/Nav3Type';

class Nav3 extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }
    render() {
        return (
            <div className="nav3">
                <div className="title">导航3</div>
                <div className="list">
                    <h2>
                        <span>title</span>
                        <Link to="xxx">more</Link>
                    </h2>
                    <div className="filter">
                        <p>筛选：</p>
                        <Link to="/nav3/all">所有</Link>
                        <Link to="/nav3/1">类型1</Link>
                        <Link to="/nav3/2">类型2</Link>
                        <Link to="/nav3/3">类型3</Link>
                        <Link to="/nav3/4">类型4</Link>
                        <Link to="/nav3/5">类型5</Link>
                    </div>
                    <Switch>
                        <Route path="/nav3/:id" component={Nav3Type} />
                        <Redirect from="/nav3/" to="/nav3/all" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Nav3;
