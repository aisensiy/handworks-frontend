import React, { PropTypes } from 'react';

const ProjectList = React.createClass({
  render() {
    return (
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            </thead>

            <tbody>
            {this.props.projects.map((elem, index) =>
                <Project {...elem} key={index} />
            )}
            </tbody>

          </table>
          <button className="btn btn-primary" onClick={(e) => this.props.goToCreateNewProject()}>Create New</button>
        </div>
    );
  }
});

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  goToCreateNewProject: PropTypes.func.isRequired
};

var Project = React.createClass({
  render() {
    return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.description}</td>
        </tr>
    );
  }
});

export default ProjectList;
