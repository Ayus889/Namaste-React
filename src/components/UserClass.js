import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP!");
    }, 1000);
    console.log("Child component Did Mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component did unmount");
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count inscrease
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @yushkr</h2>
      </div>
    );
  }
}

export default UserClass;
