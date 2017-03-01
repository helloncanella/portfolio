import React, { Component } from 'react'

export default class Header extends Component {

    render() {

        return (
            <header className="header">
                <div className="container">
                    <img className="profile-image img-responsive pull-left" src="assets/images/profile.png" alt="James Lee" />
                    <div className="profile-content pull-left">
                        <h1 className="name">Hellon Canella</h1>
                        <h2 className="desc">Web App Developer</h2>
                        <ul className="social list-inline">
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-github-alt"></i></a></li>
                            <li className="last-item"><a href="#"><i className="fa fa-hacker-news"></i></a></li>
                        </ul>
                    </div>
                    <a className="btn btn-cta-primary pull-right" href="http://themes.3rdwavemedia.com/" target="_blank"><i className="fa fa-paper-plane"></i> Contact Me</a>
                </div>
            </header>
        )

    }

}