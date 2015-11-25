import React, { PropTypes } from 'react';

const NewExamProfile = React.createClass({
  getInitialState() {
    return {
      name: '',
      description: ''
    };
  },

  onSubmit(e) {
    e.preventDefault();
    console.log({
      name: this.refs.name.value.trim(),
      raml: this.refs.raml.value.trim(),
      archetype: this.refs.archetype.value.trim()
    });
  },

  render() {
    return (
        <div>
          <div className="page-header">
            <h1>New ExamProfile</h1>
          </div>
          <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Raml</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="raml" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Archetype</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="archetype" />
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

export default NewExamProfile;
