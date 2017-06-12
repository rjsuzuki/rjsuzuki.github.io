import React from 'react';
import './Shuffle.css';
import Project from './Project.js';

class Shuffle extends React.Component {
  render() {
    return (
            <div>
                <div className="row shuffle-nav">
                    <div className="col-lg-12 col-xs-12 text-center">
                        <button className="btn btn-default filter-button" data-filter="all">All</button>
                        <button className="btn btn-default filter-button" data-filter="hdpe">Web</button>
                        <button className="btn btn-default filter-button" data-filter="sprinkle">Android</button>
                        <button className="btn btn-default filter-button" data-filter="spray">Games</button>
                        <button className="btn btn-default filter-button" data-filter="irrigation">Misc</button>
                    </div>
                </div>
                
                <div className="row">
                    <Project title="Example" content="Something" />
                    <Project title="Example" content="IS" />
                    <Project title="Example" content="Here" />
                </div>
            </div>
        );
  }
}

export default Shuffle;