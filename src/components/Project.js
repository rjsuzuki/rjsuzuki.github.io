import React from 'react';
import './Project.css';


class Project extends React.Component {
  render() {
    return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">{this.props.title}</div>
                      <div className="panel-body">{this.props.content}</div>
                    </div>
            </div>
        );
  }
}

export default Project;