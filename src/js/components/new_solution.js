import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { NewSolutionAction } from '../actions/actions';

const NewSolution = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    var newSolution = {
      "solution[name]": this.refs.name.value,
      "solution[description]": this.refs.description.value
    };
    console.log(newSolution);
    this.props.createSolution(newSolution);
  },

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>New Solution</h1>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="solution-name">Name</label>
            <input type="text" className="form-control" id="solution=name" ref="name" />
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10" className="form-control" ref="description"></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

NewSolution.propTypes = {
  createSolution: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state['new_solution'];
}

export default connect(mapStateToProps, {
  pushState,
  createSolution: NewSolutionAction
})(NewSolution);
