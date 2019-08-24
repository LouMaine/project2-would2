import React, { Component, Fragment } from "react";
import NavItems from "./NavItems";

class Leaderboard extends Component {
  render() {
    return (
      <Fragment>
        <NavItems />
        <div>Leaderboard</div>
      </Fragment>
    );
  }
}

export default Leaderboard;
