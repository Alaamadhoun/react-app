import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {" "}
          <h2> {this.formatCount()} </h2>{" "}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h2>Zero</h2> : count;
  }
}

export default Counter;
