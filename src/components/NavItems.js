import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutAuthedUser } from "../actions/authedUser";
import Avatar from "./Avatar";

class NavItems extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { authedUser  } = this.props;

    return (
      <div>
        <Navbar color="faded" light expand="md">
           <NavbarBrand tag={Link} to="/">You Rather Would Choose?</NavbarBrand>
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

NavItems.propTypes = {
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.string,
};

function mapStateToProps({  authedUser }) {
  return {
    authedUser,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logoutAuthedUser());
    },
  };
}

NavItems.propTypes = {
  authedUser: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);

