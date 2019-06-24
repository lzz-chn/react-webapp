import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Nav3Type.css';

class Nav3Type extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }
    render() {
        return (
            <div className="nav3type">
                <div className="title">导航3类型</div>
                <div className="list">
                    <h2>
                        <span>title</span>
                        <Link to="xxx">more</Link>
                    </h2>
                    <ul>
                        <li>
                            <Link to="/xxx/1">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                        <li>
                            <Link to="/xxx/2">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                        <li>
                            <Link to="/xxx/3">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                        <li>
                            <Link to="/xxx/4">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                        <li>
                            <Link to="/xxx/5">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                        <li>
                            <Link to="/xxx/6">
                                Content{this.props.match.params.id}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav3Type;
