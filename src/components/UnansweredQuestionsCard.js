import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {Button} from "reactstrap";
//import { colors } from "../utils/helpers";

export class UnansweredQuestionsCard extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    unanswered: PropTypes.bool.isRequired
  };
  state = {
    viewPoll: false
  };
  handleClick = e => {
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  render() {
    const { question, unanswered } = this.props;
   // const buttonColor = unanswered === true ? colors.green : colors.blue;
    const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <Fragment>
      <Card>
      <CardBody>
        <CardTitle> textAlign="left">
          Would you rather
        </CardTitle>
        <p style={{ textAlign: 'center' }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <Button 
          color= "primary" size= "tiny" onClick={this.handleClick} content={buttonContent}>unanswered</Button>          content={buttonContent}
        />
        
        </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default UnansweredQuestionsCard;
