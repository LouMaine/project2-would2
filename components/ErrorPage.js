import React from "react";
//import {NavLink} from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
export const ErrorPage = () => {
  return (
    <Card>
      <CardTitle>404 error</CardTitle>
      <CardBody>
        Sorry, the page does not exist
      </CardBody>
    </Card>
  );
};
export default ErrorPage;
