import React, {Component} from 'react';

export default class Footnote extends Component {
  render() {
    return(
      <footer className="wrapper">
        <div className="col1-start col6-end">
          <p>&copy; 2022 made with &#x1F9CB;and react by ploy pruekcharoen</p>
        </div>
        <div className="col9-end">
          <a href="mailto:ploypilinpcr@gmail.com" target="_blank" rel="noreferrer">email</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="https://www.linkedin.com/in/ploypruekcharoen/" target="_blank" rel="noreferrer">linkedin</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="https://medium.com/@ploypp" target="_blank" rel="noreferrer">blog</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="/Ploypilin_Pruekcharoen_Resume.pdf" target="_blank" rel="noreferrer">resume</a>
        </div>
      </footer>
    );
  }
}
