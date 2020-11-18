import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

const Link = require("react-router-dom").Link


class Nav extends Component {

    render(){
        let currentRoute = this.props.location.pathname;
        // console.log(this.props)
        return (
            <div className="nav-container">
                <div className="nav-title-grid">
                    <p id="nav-title">Travelize</p>
                    <p id="nav-subtitle">My traveling experiences</p>
                </div>
                <div className={"nav-buttons-grid"}>
                    <Link  to="/">
                        <button className={ currentRoute === '/' ? "nav-button nav-current-route" : "nav-button"}>Home</button>
                    </Link>
                    <Link  to="/blog">
                        <button className={ currentRoute === '/blog' ? "nav-button nav-current-route" : "nav-button"}>Blog</button>
                    </Link>
                    <Link  to="/about">
                        <button className={ currentRoute === '/about' ? "nav-button nav-current-route" : "nav-button"}>About</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav)