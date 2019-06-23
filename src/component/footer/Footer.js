import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }
    render() {
        return (
            <div className="footer">
                <h2>GitHub</h2>
                <ul>
                    <li>链接01</li>
                    <li>链接02</li>
                    <li>链接03</li>
                    <li>链接04</li>
                    <li>链接05</li>
                    <li>链接06</li>
                    <li>链接07</li>
                    <li>链接08</li>
                    <li>链接09</li>
                    <li>链接10</li>
                    <li>链接11</li>
                    <li>链接12</li>
                    <li>链接13</li>
                    <li>链接14</li>
                    <li>链接15</li>
                    <li>链接16</li>
                    <li>链接17</li>
                    <li>链接18</li>
                    <li>链接19</li>
                    <li>链接20</li>
                </ul>
                <div>
                    <span>© 2019 GitHub, Inc.</span>
                    <span>Terms</span>
                    <span>Privacy</span>
                </div>
            </div>
        );
    }
}

export default Footer;
