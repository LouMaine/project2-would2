 
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { handleSaveQuestionAnswer } from "../actions/users";
import Login from "./Login";

/*** Used FormGroup, Card, CardBody, Labels code from the 'reactstrap' website and 'Github notes'****/

class QuestionDetails extends Component {
  state = {
    selectedAnswer: '',
  }

  radioSelected = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AnswerToQuestion(this.state.selectedAnswer);
  };

  render() {
    
    const { answers, question, option,  questionAuthor, userId, isAnswered, isOptionOneAnswered } = this.props;
    const {selectedAnswer}=this.state;
    const answer = selectedAnswer[option];
   

    if (!question) {
      return <Redirect to="/ErrorPage" />;
    }

    

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
    const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);

    const checkmark = <FaCheck size="15" color="gray" />;

    return (

       <Card>
                       
        <CardHeader>
       { /***  Information from reactstrap Github components Cards, Forms Buttons**/}
          <user Id={questionAuthor.id}/>
               
        </CardHeader>
         <CardBody>
          <CardTitle>Rather Do...?</CardTitle>
          {isAnswered
            ?   (
              <ul>
              <li>{question.optionOne.text} ({optionOneVotes} vote(s) at {percentageOptionOne}%){isOptionOneAnswered ? checkmark : null}</li>
              <li>{question.optionTwo.text} ({optionTwoVotes} vote(s) at {percentageOptionTwo}%){isOptionOneAnswered ? checkmark : null}</li>
              </ul>
            ) : (

          <Form onSubmit={this.handleSubmit}>
              <FormGroup tag="fieldset">
    
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                    {question.optionOne.text}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                  <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                    {question.optionTwo.text}
                  </Label>
                </FormGroup>
              </FormGroup>

              <Button disabled={selectedAnswer === ''}>Submit</Button>
            </Form>          
    )}
        </CardBody>
      </Card>

    );
  }
}


QuestionDetails.propTypes = {
  question: PropTypes.object,
  questionAuthor: PropTypes.object,
  answer: PropTypes.string,
  isAnswered: PropTypes.bool.isRequired,
  AnswerToQuestion: PropTypes.func.isRequired,
  isOptionOneAnswered: PropTypes.bool.isRequired,
};


const mapStateToProps = ({ questions, users, authedUser }, {match}) => {
  const answers = users[authedUser].answers;
  let answer;
  const { id } = match.params;
  const question = questions[id];
if (answers.hasOwnProperty(question.id)) {
    answer = answers[question.id]
  }

  const questionAuthor = users[question.author];
  const isOptionOneAnswered = question.optionOne.votes.includes(authedUser);
  const isOptionTwoAnswered = question.optionTwo.votes.includes(authedUser);
  const isAnswered = isOptionOneAnswered || isOptionTwoAnswered;
  
  return { question, questionAuthor, answer, isAnswered, isOptionOneAnswered,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props.match.params;
  return {
    AnswerToQuestion: (answer) => {
      dispatch(handleSaveQuestionAnswer(id, answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
