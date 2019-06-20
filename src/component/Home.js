import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './css/Home.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Home">
                    <div className="Header">
                        <Link to="/">
                            <img src={null} alt="logo" />
                        </Link>

                        <div className="user">
                            <Link to={null}>
                                <svg id="icon-person" viewBox="0 0 18 22">
                                    <path d="M9 20.5c5.633 0 7.5-.507 7.5-2.5 0-2.484-3.27-4.5-7.5-4.5S1.5 15.516 1.5 18c0 1.993 1.867 2.5 7.5 2.5zm0 1C2.742 21.5.5 20.892.5 18c0-3.164 3.787-5.5 8.5-5.5s8.5 2.336 8.5 5.5c0 2.892-2.242 3.5-8.5 3.5zm0-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                                </svg>
                            </Link>
                            <Link to={null}>
                                <svg id="icon-person" viewBox="0 0 18 22">
                                    <path d="M9 20.5c5.633 0 7.5-.507 7.5-2.5 0-2.484-3.27-4.5-7.5-4.5S1.5 15.516 1.5 18c0 1.993 1.867 2.5 7.5 2.5zm0 1C2.742 21.5.5 20.892.5 18c0-3.164 3.787-5.5 8.5-5.5s8.5 2.336 8.5 5.5c0 2.892-2.242 3.5-8.5 3.5zm0-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="Banner">Banner</div>
                    <div className="Search">
                        <Link to={null}>
                            <svg id="icon-find" viewBox="0 0 16 15">
                                <path d="M11.819 10.586l3.473 3.268a.548.548 0 0 1-.752.799l-3.46-3.256a6.579 6.579 0 1 1 .738-.81zM6.6 12.06a5.482 5.482 0 1 0 0-10.965 5.482 5.482 0 0 0 0 10.965z" />
                            </svg>
                            <span>傲气如我</span>
                        </Link>
                    </div>
                    <div className="NavList">
                        <Link to={null}>
                            <i className="NavIcon"></i>
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon"></i>
                            <span></span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon"></i>
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon"></i>
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon"></i>
                            <span>分类</span>
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Home;
