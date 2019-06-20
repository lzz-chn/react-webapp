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

                        <div className="User">
                            <Link to={null}>
                                <svg
                                    id="icon-person"
                                    viewBox="0 0 18 22"
                                >
                                    <path d="M9 20.5c5.633 0 7.5-.507 7.5-2.5 0-2.484-3.27-4.5-7.5-4.5S1.5 15.516 1.5 18c0 1.993 1.867 2.5 7.5 2.5zm0 1C2.742 21.5.5 20.892.5 18c0-3.164 3.787-5.5 8.5-5.5s8.5 2.336 8.5 5.5c0 2.892-2.242 3.5-8.5 3.5zm0-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                                </svg>
                            </Link>
                            <Link to={null}>
                                <svg
                                    id="icon-book"
                                    viewBox="0 0 18 16"
                                >
                                    <g>
                                        <path d="M.5 1h14C15.88 1 17 2.121 17 3.5 17 4.884 15.886 6 14.5 6H.5a.5.5 0 0 0 0 1h14C16.44 7 18 5.436 18 3.5 18 1.57 16.432 0 14.5 0H.5a.5.5 0 1 0 0 1z" />
                                        <path d="M1.146.854c.09.089.245.296.407.62C1.832 2.03 2 2.705 2 3.5c0 .795-.168 1.469-.447 2.026-.162.324-.318.531-.407.62l.708.708c.16-.161.38-.454.593-.88C2.793 5.28 3 4.455 3 3.5c0-.955-.207-1.781-.553-2.474C2.234.6 2.015.307 1.854.146l-.708.708zM17.5 9h-14C1.568 9 0 10.57 0 12.5 0 14.436 1.56 16 3.5 16h14a.5.5 0 1 0 0-1h-14A2.494 2.494 0 0 1 1 12.5C1 11.121 2.12 10 3.5 10h14a.5.5 0 1 0 0-1z" />
                                        <path d="M16.146 9.146c-.16.161-.38.454-.593.88-.346.693-.553 1.519-.553 2.474 0 .955.207 1.781.553 2.474.213.426.432.719.593.88l.708-.708c-.09-.089-.245-.296-.407-.62C16.168 13.97 16 13.295 16 12.5c0-.795.168-1.469.447-2.026.162-.324.318-.531.407-.62l-.708-.708z" />
                                    </g>
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
                            <i className="NavIcon" />
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon" />
                            <span>排行榜</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon" />
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon" />
                            <span>分类</span>
                        </Link>
                        <Link to={null}>
                            <i className="NavIcon" />
                            <span>分类</span>
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Home;
