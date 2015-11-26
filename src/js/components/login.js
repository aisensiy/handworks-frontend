import React, { PropTypes } from 'react';

const Login = React.createClass({
  onClickSubmit(e) {
    e.preventDefault();
    this.props.onLogin({
      name: this.refs.name.value,
      password: this.refs.password.value
    });
  },
  render() {
    return (
        <form onSubmit={this.onClickSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" placeholder="Username" ref="name"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref="password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
  }
});

Login.propTypes = {
  onLogin: React.PropTypes.func.isRequired
};

export default Login;
