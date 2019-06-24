import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './component/Home';
import Header from './component/header/Header';
import Index from './component/main/home/Index';
import Nav1 from './component/main/nav1/Nav1';
import Nav2 from './component/main/nav2/Nav2';
import Nav3 from './component/main/nav3/Nav3';
import Nav4 from './component/main/nav4/Nav4';
import Footer from './component/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* <Home /> */}
                    <Header />
                    <Route exact path="/" component={Index}/>
                    <Route path="/nav1" component={Nav1}/>
                    <Route path="/nav2" component={Nav2}/>
                    <Route path="/nav3" component={Nav3}/>
                    <Route path="/nav4" component={Nav4}/>
                    <Route path="/nav/:id" component={Nav1} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
