import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardTitle, FormGroup, Label, Input, Form, Button } from 'reactstrap';
import {handleSaveQuestion} from '../actions/questions';
import { routes } from "../utils";


export class NewQuestion extends Component {
   constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
}

 /** }
 state = {
    optionOneText: '',
    optionTwoText: '',
  }**/

  submitForm(e) {
    const { onSubmitForm, history } = this.props;
    onSubmitForm(e);
    history.push(routes.root);
  }

 
  render() {
    const {questions, optionOneText, optionTwoText, authedUser }= this.props;
    //const {questions, users}=> props;
    
    return (
      <React.Fragment>
        <Form onSubmit={this.submitForm}>
       
      <Card>
              
         <CardTitle>You Rather Do ?</CardTitle>
            <CardBody>
              <Input type="text" placeholder="Type option one" id="optionOne" />
                <br />    
              <Input type="text" placeholder="Type option two" id="optionTwo"  />
                            
             </CardBody>

            <CardFooter>
              <input type="hidden" id="authorId" value={authedUser} />
              <Button type="submit">Save</Button>
            </CardFooter>

      </Card>
        </Form>
      </React.Fragment>
 
    );
  }
}
const mapStateToProps = state => {
  return { authedUser: state.authedUser };
};


const mapDispatchToProps = dispatch => ({
  onSubmitForm: e => {
    e.preventDefault();
    const questions = {
     author: e.target.authorId.value,
      
     optionOneText: e.target.optionOne.value,
     optionTwoText: e.target.optionTwo.value
    };
    dispatch(handleSaveQuestion(questions));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewQuestion)
);



