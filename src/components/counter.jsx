import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          <h2>{this.formateCount()}</h2>
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.state;
    return value === 0 ? <h2>Zero</h2> : value;
  }
}

export default Counter;
