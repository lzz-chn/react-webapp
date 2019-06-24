import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Nav2.css';

class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = { img: [] };
        this.getApi();
    }
    getApi() {
        const getImg = fetch(
            'https://www.doutula.com/api/search?keyword=金馆长&mime=0&page=2'
        )
            .then(response => response.json())
            .then(result => result);

        Promise.all([getImg]).then(
            result => {
                this.setState({ img: result[0].data.list });
                console.log(this.state.img);
            },
            error => {
                console.log(error);
            }
        );
    }
    render() {
        const img = this.state.img;
        return (
            <div className="nav2">
                <div className="title">导航2</div>
                <div className="list">
                    <h2>
                        <span>title</span>
                        <Link to="xxx">more</Link>
                    </h2>
                    <ul>
                        {img.map((v, i) => (
                            <li>
                                <p>{v.out_id}</p>
                                <Link to="xxx/1">
                                    <img src={v.image_url} alt="" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav2;
