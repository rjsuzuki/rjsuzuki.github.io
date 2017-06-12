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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima expedita incidunt rerum.</p>
                        <ul className="social">
                            <li> <a href="#"> <i className=" fa icon-facebook">   </i> </a> </li>
                            <li> <a href="#"> <i className="fa icon-linkedin">   </i> </a> </li>
                            <li> <a href="#"> <i className="fa icon-github">   </i> </a> </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div className="col-padding">
                            <h3>Contact Me</h3>
                            <ul>
                                <li> <a href="mailto:ryanjsuzuki@gmail.com">ryanjsuzuki@gmail.com</a></li>
                            </ul>
                            <p>Feel free to send me an email if you have any questions. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div className="col-padding">
                            <h3>Extra Links</h3>
                            <ul>
                                <li> <a href="#"> Lorem Ipsum </a> </li>
                                <li> <a href="#"> Lorem Ipsum </a> </li>
                                <li> <a href="#"> Lorem Ipsum </a> </li>
                                <li> <a href="#"> Lorem Ipsum </a> </li>
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