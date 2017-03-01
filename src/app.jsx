import React, { Component } from 'react';
import './assets/css/styles.scss';
import './assets/js/main.js'
import './assets/plugins/jquery-rss/dist/jquery.rss.min.js'


// import './assets/plugins/github-activity/src/github-activity.js'
// import './assets/plugins/github-calendar/dist/github-calendar.min.js'

import Header from './header/Header.jsx'
import Primary from './primary/Primary.jsx'
import Sidebar from './sidebar/Sidebar.jsx'


export default class App extends React.Component {
	render() {
		return (
			<div className="website">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}


export class Main extends Component {
	render() {
		return (
			<div className="container sections-wrapper">
				<div className="row">
					<Primary />
					<Sidebar />
				</div>
			</div>
		)
	}

}

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container text-center">
					<small className="copyright">Designed with <i className="fa fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
				</div>
			</footer>
		)
	}
}