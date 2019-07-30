import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthedlogoutUser } from '../actions/authedUser';
//import Users from "./Users";

class NavBar extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
         <NavbarBrand tag={Link} to="/">You Rather Choose?)</NavbarBrand>
          {authedUser
            && (
              <Fragment>
                <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.isOpen} navbar>
                   <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/leaderboard">Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/add">Add Questions</NavLink>
                    </NavItem>
                    <NavItem>
                      <user id={authedUser} />
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={this.props.logout}>Logout</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Fragment>
            )
          }
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
 authedUser: PropTypes.string,
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(AuthedlogoutUser());
    },
  };
}

NavBar.propTypes = {
authedUser: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
