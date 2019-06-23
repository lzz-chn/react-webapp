import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { status: 'loading' };
    }
    componentDidMount() {
        // 展开导航栏
        this.refs.navOpen.onclick = event => {
            event.stopPropagation();
            this.refs.navOpen.style.animation = 'hidden 0.3s linear forwards';
            this.refs.navClose.style.animation = 'show 0.3s 0.3s linear forwards';
            this.refs.navList.style.animation =
                'slideDown 0.3s linear forwards';
        }; 
        // 收起导航栏
        this.refs.navClose.onclick = event => {
            this.refs.navOpen.style.animation = 'show 0.3s 0.4s linear forwards';
            this.refs.navClose.style.animation = 'hidden 0.3s linear forwards';
        };
        document.onclick = () => {
            this.refs.navOpen.style.animation = 'show 0.3s 0.4s linear forwards';
            this.refs.navClose.style.animation = 'hidden 0.3s linear forwards';
            this.refs.navList.style.animation = 'slideUp 0.3s linear forwards';
        };
    }
    render() {
        return (
                <div className="header">
                    <Link className="logo">
                        <svg
                            height="30"
                            class="octicon octicon-mark-github text-white"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="30"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                    </Link>
                    <div className="nav">
                        <svg
                            height="24"
                            class="octicon octicon-three-bars text-white"
                            viewBox="0 0 12 16"
                            version="1.1"
                            width="18"
                            aria-hidden="true"
                            ref="navOpen"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                            />
                        </svg>
                        <svg
                            height="24"
                            class="octicon octicon-x text-gray"
                            viewBox="0 0 12 16"
                            version="1.1"
                            width="18"
                            aria-hidden="true"
                            ref="navClose"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                            />
                        </svg>
                        <ul className="navList" ref="navList">
                            <li>
                                <NavLink activeClassName="active" exact to="/">
                                    首页
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/nav1">
                                    导航1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/nav2">
                                    导航2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/nav3">
                                    导航3
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/nav4">
                                    导航4
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/about">
                                    关于
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Header;
