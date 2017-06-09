import React from 'react';
import './Shuffle.css';
import Project from './Project.js';

class Shuffle extends React.Component {
  render() {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xs-12" align="center">
                        <button class="btn btn-default filter-button" data-filter="all">All</button>
                        <button class="btn btn-default filter-button" data-filter="hdpe">Web</button>
                        <button class="btn btn-default filter-button" data-filter="sprinkle">Android</button>
                        <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
                        <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
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