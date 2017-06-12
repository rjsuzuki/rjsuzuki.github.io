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
                <a className="span2" href="#"><h3 className="text-muted">Ryan J. Suzuki</h3></a>
                <a className="social" href="http://linkedin.com">linkedin</a>
                <a className="social" href="http://github.com">github</a>
              </div>


            </div>
          
            <div id="navbar" className="header navbar-collapse collapse">
      					<ul className="nav nav-pills pull-right">
      						<li className="nav-item"><a className="nav-a active" to="/">Home</a></li>
      						<li className="nav-item"><a className="nav-a" href="/projects">Projects</a></li>
      						<li className="nav-item"><a className="nav-a" href="/about">About</a></li>
      						<li className="nav-item"><a className="nav-a" href="#">Contact</a></li>
      					</ul>
      			</div>
          </div>
      </nav>
        );
  }
}

export default Header;