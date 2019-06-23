import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Nav2.css';

class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = { img: [] };
        // this.getApi();
    }
    getApi() {
        const getImg = fetch('https://')
            .then(response => response.json())
            .then(result => result);

        Promise.all([getImg]).then(
            result => {
                console.log(result);
                this.setState({ img: result });
            },
            error => {
                console.log(error);
            }
        );
    }
    render() {
        return (
            <div className="nav2">
                <div className="title">导航2</div>
                <div className="list">
                    <h2>
                        <span>title</span>
                        <Link to="xxx">more</Link>
                    </h2>
                    <ul>
                        <li>
                            <Link to="xxx/1">Content1</Link>
                        </li>
                        <li>
                            <Link to="xxx/2">Content2</Link>
                        </li>
                        <li>
                            <Link to="xxx/3">Content3</Link>
                        </li>
                        <li>
                            <Link to="xxx/4">Content4</Link>
                        </li>
                        <li>
                            <Link to="xxx/5">Content5</Link>
                        </li>
                        <li>
                            <Link to="xxx/6">Content6</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav2;
