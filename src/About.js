import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';

export default class About extends Component {
  render() {
    return (
        <div className="About">
          <Navbar />
          <body>
            <h2>Let's know more about me!</h2>
            <div>
              <img src="img/me2.jpg" alt="My Portrait" className="me"></img>
            </div>
          </body>
          <Footnote/>
        </div>
    );
  }
}