import React, { Component } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from 'reactstrap';
import {handleSaveQuestionAnswer} from '../actions/users';
import {handleSaveQuestionAnswer} from '../actions/shared';

export class NewQuestion extends Component {
    static propTypes = {
    authUser: PropTypes.string.isRequired,
    handleSaveQuestionAnswer: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired
  };

  state = {
    value: {
    optionOne: '',
    optionTwo: '',
  }
}

  handleOptionOneChange = (e) => {
    e.preventDefault();
    this.setState({
      optionOne: e.target.value,
    });
  }

  handleOptionTwoChange = (e) => {
    e.preventDefault();
    this.setState({
      optionTwo: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
     if (this.state.value !== '') {
      const { authUser, question, handleSaveQuestionAnswer } = this.props;
      handleSaveQuestionAnswer(authedUser, question.id, this.state.value);
    }
  };

  render() {
    const {question} =this.props;
    const { optionOne, optionTwo } = this.state;
    return (
      <Card>
        <CardBody>
          <CardTitle>You Rather Do ?</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="optionOne">Option One</Label>
              <Input
                id="optionOne"
                type="text"
                value={optionOne}
                onChange={this.handleOptionOneChange}
                placeholder="Type option one"
              />
            </FormGroup>
            <FormGroup>
              <Label for="optionTwo">Option Two</Label>
              <Input
                id="optionTwo"
                type="text"
                name="optionTwo"
                value={optionTwo}
                onChange={this.handleOptionTwoChange}
                placeholder="Type option two"
              />
            </FormGroup>
            <Button disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
function mapStateToProps({ authUser }, { match }) {
   const { question_id } = match.params;
   const question = questions[question_id];

  return {
    authedUser
  };
}

export default connect(mapStateToProps,{ handleSaveQuestionAnswer }
)(NewQuestion);

