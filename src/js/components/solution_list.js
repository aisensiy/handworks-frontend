import React, { PropTypes } from 'react';

const SolutionList = React.createClass({
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
          {this.props.solutions.map((elem, index) =>
              <Solution {...elem} key={index} />
          )}
          </tbody>

        </table>
          <button className="btn btn-primary" onClick={(e) => this.props.goToCreateNewSolution()}>Create New</button>
        </div>
    );
  }
});

SolutionList.propTypes = {
  solutions: PropTypes.array.isRequired,
  goToCreateNewSolution: PropTypes.func.isRequired
};

var Solution = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
});

export default SolutionList;
