import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
 

  render() {
    return (
      <div>
         <button
          onClick={this.props.onResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onReset={this.props.onReset}
            onResetAll={this.props.onResetAll}
            onDelete={this.props.onDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
