import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../utils/index";
import {Card, CardBody, CardTitle, Input, Label, Button, FormGroup, Form } from "reactstrap";
import { handleSaveQuestion } from "../actions/questions";
import UnansweredQuestionCard from "./UnansweredQuestionCard";


export class NewQuestion extends Component {
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired
  };
  
  state = {
    option1: '',
    option2: ''
  };

  handleOptionOneChange = e => {
  e.preventDefault();
  const {value} = e.target
    this.setState({ option1: e.target.value,
    });
}

  handleOptionTwoChange =e => { 
  e.preventDefault();
  const {value} = e.target
  this.setState({ option2: e.target.value,
    });
}

  
  handleSubmit = e => {
    e.preventDefault();
       const {authedUser, handleSaveQuestion} =this.props;
       const {option1, option2}=this.state;
                     
       }                     

       


  render() {
        //const disabled = this.state.option1 === '' || this.state.option2 === '';
         const { option1, option2 } = this.state
     return <Redirect to="/" />
   
    return (
      //<Fragment>
      <Card>
      <CardBody>
       <CardTitle> Would you Rather....NewPollQuestion</CardTitle>
        
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
          <Label for="optionOne" lg={2}>Option One</Label>
            <Input type="text"
              name="option1"
              id="option1"
              value={option1}
              placeholder="First Option"
              onChange={this.handleOptionOneChange}
              />
         </FormGroup>   
            <br />      
         <FormGroup>
          <Label for="optionTwo" lg={2}>Option Two</Label>
             <Input type="text"
               name="option2"
               id="option2"
               value={option2}
               placeholder="Second Option"
               onChange={this.handleOptionTwoChange}
               
               />
           
         </FormGroup>
           
           <Button size="lg"  >New Question Submit</Button>   
                    
         </Form>
         </CardBody>
         </Card>
     );
  }
}

function mapStateToProps  ({authedUser }) {
  return {
    authedUser
  };
}

export default connect(
  mapStateToProps,
  { handleSaveQuestion }
)(NewQuestion);









