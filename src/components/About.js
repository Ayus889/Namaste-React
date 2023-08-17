import UserContext from "../utils/UserContext";
import User from "./User";
//import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web series About section</h2>

        <User name={"Ayush Kumar (function)"} location={"Patna (function)"} />
      </div>
    );
  }
}
// <UserClass name={"Ayush Kumar (class)"} location={"Patna (Class)"} />
export default About;
