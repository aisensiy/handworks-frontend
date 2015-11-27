import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { NewStackAction } from '../actions/actions';

const NewStack = React.createClass({
  getInitialState() {
    return {
      name: '',
      description: ''
    };
  },

  onSubmit(e) {
    e.preventDefault();
    console.log({
      name: this.refs.name.value,
      backing_services: this.refs.backing_services.value.trim().split(",").map((e) => e.trim())
    });
    var newStack = {
      "stack[name]": this.refs.name.value,
      "stack[backing_services][]": this.refs.backing_services.value.trim().split(",").map((e) => e.trim()).join(",")
    }
    this.props.dispatch(NewStackAction(newStack, `${this.props.solution_id}/stacks`))
  },

  render() {
    return (
        <div>
          <div className="page-header">
            <h1>New Stack</h1>
          </div>
          <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Backing Services</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="backing_services" placeholder='Separate by ", "' />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    new_stack: state['new_stack'],
    solution_id: state.router.params.id
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(NewStack);

