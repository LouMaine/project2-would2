import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../utils";
import {Card, CardBody, CardTitle, Input, Label, Button, FormGroup, Form } from "reactstrap";
import { handleSaveQuestion } from "../actions/questions";
import {handleSaveQuestionAnswer} from "../actions/users";
//import UnansweredQuestionsCard from "./UnansweredQuestionsCard";



export class NewQuestion extends Component {
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired
  };
  
  state = {
    option1: '',
    option2: '',
    toHomePage: false
  };

 /** handleOptionOneChange = (e) => {
  e.preventDefault();
  //const {value, id} = e.target
  this.setState({ option1: e.target.value,

    });
}**/

  handleOptionChange =(e) => { 
  e.preventDefault();
      this.setState({ [e.target.id]: e.target.value });
 // const {value, id} = e.target
 // this.setState({() => ({[id]: value}))

}

  
  handleSubmit = (e) => {
    e.preventDefault()
      // const {authedUser, handleSaveQuestion} =this.props;
       const {option1, option2}=this.state
       const {dispatch} = this.props 
       this.props.handleSaveQuestion(option1, option2)
       this.setState(() => ({
        option1: "",
        option2: "",
        toHomePage: true
        }))
        }         
                       

       


  render() {
        //const disabled = this.state.option1 === '' || this.state.option2 === '';
         const { option1, option2, toHomePage } = this.state
         if (toHomePage===true) {
         return <Redirect to="/" />
   }
    return (
      //<Fragment>
      <Card>
      <CardBody>
       <CardTitle> Would you Rather....NewPollQuestion</CardTitle>
        
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
          <Label for="optionOne"md={2}>Option One</Label>
            <Input type="text"
              name="option1"
              id="option1"
              value={option1}
              placeholder="First Option"
              onChange={this.handleOptionChange}
              />
         </FormGroup>   
            <br />      
         <FormGroup>
          <Label for="optionTwo" md={2}>Option Two</Label>
             <Input type="text"
               name="option2"
               id="option2"
               value={option2}
               placeholder="Second Option"
               onChange={this.handleOptionChange}
               
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









