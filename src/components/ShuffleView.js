import React from 'react';
import './ShuffleView.css';
import Project from './Project.js';
import projectimg1 from '../assets/img/projects/nck-website-small.png';
import projectimg2 from '../assets/img/projects/cygna-site.png';

class ShuffleView extends React.Component {
  render() {
    return (
        <div>

            <div className="row shuffle-grid" id="grid">
                <Project title="Northern California Karate" imgSrc={projectimg1} alt="nck" data-groups='["web"]'/>
                <Project title="Cygna Energy Services" imgSrc={projectimg2} alt="cygna" data-groups='["web"]'/>
                <Project title="Flappy Bird Clone" imgSrc="http://placehold.it/300x100" alt="flappy" data-groups='["misc"]'/>
            </div>
        </div>
    );
  }
}

export default ShuffleView;