import React from "react";

//  Stateless Functional Component Example
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

/*
    import React, {Component} from "react";

    class NavBar extends Component {
      render() {
        return (
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar{" "}
              <span className="badge badge-pill badge-secondary">
                {this.props.totalCounters}
              </span>
            </a>
          </nav>
        );
      }
    }

    export default NavBar;
*/

//  Destructuring Arguments
/*
    const NavBar = (props) {
      ...
          {props.totalCounters}
      ...
    }

    or

    const NavBar = ({totalCounters}) {
      ...
          {totalCounters}
      ...
    }
*/
