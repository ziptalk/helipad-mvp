import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <div className="headerWrapper">
                <div className="headerRow">
                    <div className="headerTitle">
                        Helipad
                    </div>
                    <div className="headerMenus">
                        <Link to="/" className="headerMenu">
                            Home
                        </Link>
                        <Link to="/" className="headerMenu">
                            Housing
                        </Link>
                        <Link to="/" className="headerMenu">
                            Sign Up
                        </Link>
                        <Link to="/" className="headerMenu">
                            Login
                        </Link>
                        <Link to="/" className="headerMenu">
                            My Page
                        </Link>
                    </div>
                </div>
                <div className="divider" />
            </div>
        );
    }
}