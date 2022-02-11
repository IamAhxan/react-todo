import React, { Component } from "react";
class Counter extends Component {
  state = {
    tags: [],
  };
  style = {
    fontSize: 30,
  };
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <ul>
          {" "}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul>
      );
    }
  }

  //outdated method to bind this or anything from state to a standalone function
  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  render() {

    const {onIncrement , onDecrement , counter , onReset, onDelete , id} = this.props
    return (
      <div>
        <span style={this.style} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {onIncrement(counter)}}
          className="btn btn-secondry btn-sm m-2"
        >
          INCREMENT
        </button>
        <button
          onClick={() => {onDecrement(counter)}}
          className="btn btn-secondry btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => {onReset(counter)}}
          className="btn btn-secondry btn-sm"
        >
          Reset
        </button>
        <button
          onClick={()=>onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}

        {/* render something conditionally */}
        {this.state.tags.length === 0 && "Ahsan Here"}
      </div>
    );
  }
  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  getBadgeClass() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
