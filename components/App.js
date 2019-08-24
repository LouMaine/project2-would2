import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LoadingBar from "react-redux-loading-bar";
import { Container } from "reactstrap";
import { handleInitialData } from "../actions/shared";
//import {handleReceiveUsers } from "../actions/users";
//import {handle } from "../actions/questions";
import Login from "./Login";
import Avatar from "./Avatar";
import NavItems from "./NavItems";
import HomePage from "./HomePage";
import QuestionDetails from "./QuestionDetails";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import ErrorPage from "./ErrorPage";


class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { notLogged } = this.props;


    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavItems />
          <Container>
          
            <Switch>
              {
                notLogged ? <Route path="/" exact component={Login} />
                  : (
                    <Fragment>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/questions/:id" component={QuestionDetails} />
                      <Route path="/add" component={NewQuestion} />
                      <Route path="/leaderboard" component={Leaderboard} />
                    </Fragment>
                  )
              }
              <Route component={ErrorPage} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUserId }) => ({
  notLogged: authedUserId === null,
});

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => {
    dispatch(handleInitialData());
  },
});


App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  notLogged: PropTypes.bool.isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
