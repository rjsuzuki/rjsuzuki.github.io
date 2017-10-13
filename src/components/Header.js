import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="row brand">
                <ul className="nav nav-pills pull-right">
                  <li><a className="social" href="http://linkedin.com/in/ryanjsuzuki">linkedin</a></li>
                  <li><a className="social" href="http://github.com/rjsuzuki">github</a></li>
                </ul>
              </div>
            </div>
          
            <div id="navbar" className="header navbar-collapse collapse">
      					<ul className="nav nav-pills pull-right">
      						<li className="nav-item"><a className="nav-a" href="mailto:ryan@ryanjsuzuki.com">Contact</a></li>
      					</ul>
      			</div>
          </div>
      </nav>
        );
  }
}

export default Header;