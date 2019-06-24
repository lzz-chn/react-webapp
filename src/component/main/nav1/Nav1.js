import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Nav1.css';

class Nav1 extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0 };
        this.getApi();
    }
    getApi() {
        const getArticle = fetch(`
            http://localhost:8081/api/getArticle?pid=${
                this.props.match.params.id
            }`)
            .then(response => response.json())
            .then(result => result);
        Promise.all([getArticle]).then(
            result => {
                // console.log(result);
                let [article] = result;
                this.setState({ article });
            },
            error => {
                console.log(error);
                this.setState({ article: [] });
            }
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });
            this.getApi();
        }
        // if (this.props.userID !== this.props.match.params.id) {
        //     this.props.userID = this.props.match.params.id;
        //     console.log(this.props.userID);
        //     this.getApi();
        // }
    }
    render() {
        let article = this.state.article ? this.state.article : [];

        return (
            <div className="nav1">
                <div className="title">导航1</div>
                <div className="list">
                    <h2>
                        <span>id: {this.props.match.params.id}</span>
                        <Link to="xxx">more</Link>
                    </h2>
                    <ul>
                        {article.map((v, i) => (
                            <li key={i}>
                                <Link to="xxx/1">{v.title}</Link>
                            </li>
                        ))}
                        {/* <li>
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
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav1;
