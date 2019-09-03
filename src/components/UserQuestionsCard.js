import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { routes } from "../utils/index";
export const UserQuestionsCard = props => {
  const { avatarUrl, name, questionId, optionsSummaryText } = props;
  return (
    <React.Fragment>
      <Container fluid style={{border:"2px blue"}}>
        <Row>
          <Col md={{ size: 1 }} style={{marginTop:20, paddingTop:20 }} >
            <Avatar big picture={avatarUrl} name={name}  />
          </Col>
          <Col md={{ size: 8 }} style={{marginTop:20, paddingTop:20 }} >
            <Card style={{ padding: 4, margin: 4}}>
              <CardTitle tag="h3">{name} asks: Would you rather</CardTitle>

              <CardBody>
                {optionsSummaryText} <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {" "}
            <Button color="info" style={{margin:10, padding:10}}>
              <Link
                to={`${routes.questions}${questionId}`}
                style={{ color: "white" }}
              >
                View Poll
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default UserQuestionsCard;
