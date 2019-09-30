import React from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import Avatar from "./Avatar";
import Leaderboard from "./Leaderboard";

export const AvatarUserCard = props => {
  const { users, authedUser } = props;
  const score = users.questions.length + Object.keys(users.answers).length;
  return (
    <Container fluid style={{ border: "2px solid blue",marginTop:10, paddingTop:10 }}>
      <Row>
        <Col md={{ size: 1 }} style={{marginTop:20, paddingTop:20 }}>
          <Avatar big picture={users.avatarURL} name={users.name} />
        </Col>
        <Col md={{ size: 8 }} style={{marginTop:10, paddingTop:10 }} >
          <Card style={{ padding: 4, margin: 4}}>
            <CardTitle tag="h3">{users.name}</CardTitle>

            <CardBody>
              Answered Questions:{" "}
              <strong>{Object.keys(users.answers).length} </strong>
              <br />
              Created Questions: <strong>{users.questions.length}</strong> <br />
            </CardBody>
          </Card>
        </Col>
        <Col style={{marginTop:10, paddingTop:10 }} >
          <Card style={{ padding: 4, margin: 4}}>
            <CardTitle>Score</CardTitle>
            <CardBody tag="h3">{score}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AvatarUserCard;
