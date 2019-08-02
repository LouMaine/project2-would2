import React, { Component } from "react";
 
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Question from "./Question";

//** Information code from github website on reactstrap**/

class HomePage extends Component {
  state = {
    activeTab: '1',
  };

constructor (props) {
  super (props);
  this.toggle=this.toggle.bind(this);
}
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active:this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>Unanswered Questions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>Answered Questions</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              {unansweredQuestions.map(qid => (
                <Col key={qid} sm="4">
                  <Question id={qid} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {answeredQuestions.map(qid => (
                <Col key={qid} sm="4">
                  <Question id={qid} />
                </Col>
              ))}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


HomePage.propTypes = {
  answeredQuestions: PropTypes.array.isRequired,
  unansweredQuestions: PropTypes.array.isRequired,
};


const mapStateToProps = ({ questions, answer, users, authedUser }) => {
  
  const user = users[authedUser];
  console.log(user.answer);

  const answeredQuestions = Object.keys(user.answers)
 .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    answeredQuestions,
    unansweredQuestions: Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
};

export default connect(mapStateToProps)(HomePage);
