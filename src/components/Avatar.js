import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//import PropTypes from 'prop-types';



class Avatar extends Component {
  render() {
    const { users, authedUserId } = this.props.store;
    if (!authedUserId) {
      return null;
    }
    let currentUser = users[authedUserId];
    return (
      <Fragment>
        <span>{currentUser.name}</span>
        <img src={currentUser.avatarURL} className="avatar" alt={`Avatar ${currentUser.name}`} />
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {store:store};
}


export default connect(mapStateToProps)(Avatar);
