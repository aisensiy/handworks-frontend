import React from 'react';
import { PropTypes } from 'react';

const Solution = React.createClass({
  renderTab(tabState, tabName) {
    if (tabState == this.props.tabState) {
      return (<li role="presentation" className="active"
                  onClick={
                    (e) => {
                      e.preventDefault();
                      this.props.onTabChange(tabState);
                    }
                  }><a href="#">{tabName}</a></li>);
    } else {
      return (<li role="presentation"
                  onClick={
                    (e) => {
                      e.preventDefault();
                      this.props.onTabChange(tabState);
                    }
                  }><a href="#">{tabName}</a></li>);
    }
  },
  renderDescrption() {
    return (
        <div>
          {this.props.solution.description}
        </div>
    );
  },
  renderStacks() {
    return (
        <div>
          <StackList stacks={this.props.solution.stacks}/>
          <button className="btn btn-primary" onClick={(e) => this.props.goToCreateNewStack()}>Add New Stack</button>
        </div>
    );
  },
  render() {
    var description = this.props.tabState == "DESCRIPTION" ? this.renderDescrption() : "";
    var stacks = this.props.tabState == "STACKS" ? this.renderStacks() : "";
    return (
        <div>
          <h2>{this.props.name}</h2>
          <ul className="nav nav-tabs">
            {this.renderTab("DESCRIPTION", "Description")}
            {this.renderTab("STACKS", "Stacks")}
          </ul>
          {description}
          {stacks}
        </div>
    );
  }
});

Solution.propTypes = {
  tabState: PropTypes.oneOf([
      "DESCRIPTION",
      "STACKS"
  ]),
  solution: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      backing_services: PropTypes.array.isRequired
    }))
  }),
  onTabChange: PropTypes.func.isRequired
};

var StackList = React.createClass({
  render() {
    return (
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Backing Services</th>
          </tr>
          </thead>
          <tbody>
          {this.props.stacks.map((stack, index) =>
              <tr key={index}>
                <td>{stack.name}</td>
                <td>{stack.backing_services.join(", ")}</td>
              </tr>
          )}
          </tbody>
        </table>
    );
  }
});


export default Solution;
