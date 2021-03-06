import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TabContent, Nav, NavItem, TabPane } from "reactstrap";

import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Question from "./Question";
import Avatar from './Avatar';

//** Information code from github website on reactstrap to use the NavLink, Tab, NavItems**/

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
  const { user, users, unanswered, answered }=this.props;
       

    return (
      <div>
      <Avatar user={this.props.user}></Avatar>
        
        <Nav tabs>
          <NavItem>

            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
      Unanswered Questions

              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                  Answered Questions
          </NavLink>
          </NavItem>
        </Nav>
                       
        <TabContent activeTab={this.state.activeTab}>
                    
          <TabPane tabId="1">
             {unanswered.map(question => (
                 <Question 
                  key ={question.qid}
                  question_id={question.id}
                  {...question}
                  answered={true}
                  />
                                                       
               ))}
              </TabPane>
              
         <TabPane tabId="2">
            {answered.map(question => (
               <Question 
                key ={question.qid}
                 question_id={question.id}
                  {...question}
                   unanswered={false}
                   />
             ))}
            </TabPane>  
                         
          </TabContent>
    
      </div>
    );
  }
}

HomePage.propTypes = {
  //userQuestionData: PropTypes.array.isRequired,
  answered: PropTypes.array.isRequired,
  unanswered: PropTypes.array.isRequired,
};

function mapStateToProps({ questions, users, authedUser, answers }) {
  const user = users[authedUser];

  const answeredIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
      answered,
      unanswered
     }
    }
    //user:user[authedUser]
  

export default connect(mapStateToProps)(HomePage);
