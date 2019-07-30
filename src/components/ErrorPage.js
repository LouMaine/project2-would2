import React from "react";
//import {NavLink} from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
export const ErrorPage = () => {
  return (
    <Card>
      <CardTitle>404 error</CardTitle>
      <CardBody>
        Sorry, the page you are looking for not found
      </CardBody>
    </Card>
  );
};
export default ErrorPage;
