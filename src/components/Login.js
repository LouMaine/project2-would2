import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import { AuthedloginUser } from "../actions/authedUser";


class Login extends Component {
  state = {
    userId: '',
  }

  atUserChange = (userId) => { this.setState({ userId }); }

  atLogin = () => {
    const { userId } = this.state;
    const { AuthedloginUser } = this.props;
    if (userId) {
      AuthedloginUser(userId);
    }
  }

  render() {
    const { users } = this.props;
    const { userId } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="selectUser">Please Login In</Label>
          <Input type="select" name="select" value={userId} id="selectUser" onChange={event => this.onUserChange(event.target.value)}>
            <option value="" disabled>Pick a user</option>
            {
              Object.keys(users).map(user => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))
            }
          </Input>
        </FormGroup>
        <Button onClick={this.atLogin} disabled={!userId}>Login</Button>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AuthedloginUser: (id) => {
      dispatch(AuthedloginUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
