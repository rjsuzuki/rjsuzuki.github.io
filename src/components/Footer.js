import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-lg-4 col-xs-12">1</div>
                <div className="col-lg-4 col-xs-12">2</div>
                <div className="col-lg-4 col-xs-12">3</div>
                
                <div id="copyright" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Copyright</div>
            </div>
        </footer>
        );
  }
}

export default Footer;