import React from 'react';
import './assets/css/styles.scss';
// import './assets/plugins/github-activity/src/github-activity.js'
// import './assets/plugins/github-calendar/dist/github-calendar.min.js'
import './assets/js/main.js'
import './assets/plugins/jquery-rss/dist/jquery.rss.min.js'




export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
