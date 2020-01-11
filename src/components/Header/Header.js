import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';

export default class Header extends Component {
    render() {
        let urlLogo = `data:image/png;base64,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`;

        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src={urlLogo} alt=""/>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="nav">
                                <NavLink to="/Documentation">News</NavLink>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="nav menu">
                                <NavLink to="/">HOME</NavLink>
                                <NavLink to="/Profile">PROFILE</NavLink>
                                <NavLink to="/Footer">CONTACT</NavLink>
                                <NavLink to="/SecretPage">SECRET PAGE</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}
