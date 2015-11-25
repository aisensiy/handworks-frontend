import React from 'react';
import { PropTypes } from 'react';

const Stack = React.createClass({
  render() {
    return (
        <div>
          <h2>{this.props.stack.name}</h2>
          <h3>Backing Services</h3>
          <ul className="list-inline">
            {this.props.stack.backing_services.map((elem, index) => {
              return (<li key={index}>{elem}</li>);
            })}
          </ul>
          <h3>Exam Profiles</h3>
          <ExamProfileList exam_profiles={this.props.stack.exam_profiles}
                           goToCreateExamProfile={this.props.goToCreateExamProfile} />
        </div>
    );
  }
});

Stack.propTypes = {
  stack: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backing_services: React.PropTypes.array.isRequired,
    exam_profiles: React.PropTypes.arrayOf(PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      raml: React.PropTypes.string.isRequired,
      archetype: React.PropTypes.string.isRequired
    }))
  }),
  goToCreateExamProfile: PropTypes.func.isRequired
};

var ExamProfileList = React.createClass({
  render() {
    console.log(this.props.exam_profiles);

    return (
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Raml</th>
              <th>Archetype</th>
            </tr>
            </thead>
            <tbody>
            {this.props.exam_profiles.map((elem, index) => {
              return (<tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.raml}</td>
                <td>{elem.archetype}</td>
              </tr>)
            })}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.props.goToCreateExamProfile}>New ExamProfile</button>
        </div>
    );
  }
});


export default Stack;
