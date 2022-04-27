import React, {Component} from 'react';
import Navbar from './Component/NavBar';
import Footnote from './Component/Footnote';
import {Link } from "react-router-dom";

export default class Interactive extends Component {
  componentDidMount(){
    document.title = "Interactive Projects | Ploy Pruekcharoen"
  }
  render() {
    return (
      <div className="Interactive">
        <Navbar />
        <div className="wrapper">
          <div className="col3-start col7-end">
            <h1>
              connecting <i>humans + tech</i>
              <br/>through interactive arts
            </h1>
          </div>
          <div className="col3-start col7-end interactive-project">
            <a href="https://youtu.be/0-Ngf4_q-EA" target="_blank" rel="noreferrer">
              <span>Blooming Flower &#10230;</span>
              <img className="interactive-img" src="img/blooming-flower.png" alt="Blooming Flower"/>
            </a>
          </div>
        </div>   

        <div className="wrapper">
          <div className="col3-start col7-end interactive-project">
            <a href="https://youtu.be/wv0huFyQkLE" target="_blank" rel="noreferrer">
              <span>The World From My Hands &#10230;</span>
              <img className="interactive-img" src="img/a-world.png" alt="The World From My Hands"/>
            </a>
          </div>
        </div>

        <div className="wrapper">
          <div className="col3-start col7-end interactive-project">
            <a href="https://youtu.be/l7tdk8AF210" target="_blank" rel="noreferrer">
              <span>The Vest of Memories &#10230;</span>
              <img className="interactive-img" src="img/vest-memo.png" alt="The Vest of Memories"/>
            </a>
          </div>
        </div>

        <div className="wrapper">
          <div className="col3-start col7-end interactive-project">
            <a href="https://www.youtube.com/watch?v=vi8gXhpl6ig" target="_blank" rel="noreferrer">
              <span>Sound of Heart and Hand &#10230;</span>
              <img className="interactive-img" src="img/heart-hand.png" alt="Sound of Heart and Hand"/>
            </a>
          </div>
        </div>

        <div className="previous-next">
          <div className="previous">
            <Link to = "/">
              <p>see more</p>
              <h1 className="home-project-title">&#10229; design projects</h1>
            </Link>
          </div>
          <div className="next">
            <Link to = "/about">
              <p>get to know more</p>
              <h1 className="home-project-title">about me &#10230;</h1>
            </Link>
          </div>
        </div>
        <Footnote/>
      </div>
    );
  }
}