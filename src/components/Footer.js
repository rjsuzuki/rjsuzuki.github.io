import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="footer" id="footer">
                <div className="row grid-divider">
                    <div className="col-lg-4 col-xs-12">
                        <div className="col-padding">
                            <h3>Social Media</h3>
                            <ul className="social">
                                <li><a href="https://linkedin.com/in/ryanjsuzuki"><i className="fa icon-linkedin"></i></a></li>
                                <li><a href="https://github.com/rjsuzuki"><i className="fa icon-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div className="col-padding">
                            <h3>Contact Me</h3>
                            <ul>
                                <li><a href="mailto:ryan@ryanjsuzuki.com"><i className="fa icon-envelope"></i> ryanjsuzuki@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div className="col-padding">
                            <h3>Interests</h3>
                            <ul>
                                <li> <a href="http://unity.com" target="#new"> Unity </a> </li>
                                <li> Cyber Security </li>
                                <li> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="pull-left"> Copyright © Ryan J. Suzuki 2017. All rights reserved. </div>
                    <div className="pull-right">Don't Worry, Be Happy.</div>
                </div>
            </div>
        </footer>
        );
  }
}

export default Footer;