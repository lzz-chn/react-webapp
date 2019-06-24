import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import './Nav4.css';

var BBView = () => {
    return (
        <React.Fragment>
            <div className="title">
                <h3>位置:/BB</h3>
            </div>
            <ul className="list">
                <li>
                    <Link to="/nav4/1/隔壁老王">隔壁老王</Link>
                </li>
                <li>
                    <Link to="/nav4/2/产品1">产品1</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

class Nav4 extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }

    render() {
        return (
            <div className="nav4">
                <div className="title">导航4</div>
                <Route exact path="/nav4" component={BBView} />
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
                    </ul>
                </div>

                {/* <Route path="/BB/:id/:title" component={F} /> */}
            </div>
        );
    }
}

export default Nav4;
