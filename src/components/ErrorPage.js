import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";


export const ErrorPage = () => {
  return (
  	<Fragment>
    <Card>
      <CardTitle>   ***404 error***</CardTitle>
      <CardBody>
        Sorry, the page does not exist
        <NavLink to="/">  Cick Here  </NavLink>
        {" "} *** Return to Home Page and Login ***
      </CardBody>
    </Card>
    </Fragment>
  );
};
export default ErrorPage;
