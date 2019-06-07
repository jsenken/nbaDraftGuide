import React from "react";
import ReactDOM from "react-dom";
import "./card.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Card extends React.Component {
  render() {
    return (
      <Container className="card" id={this.props.name}>
        <Row>
          <Col md={1} />
          <Col md={10}>
            <div className="comp"> Evolves to {this.props.comp}</div>
          </Col>
          <Col md={1} />
        </Row>
        <hr className="titleDiv" />
        <Row>
          <Col md={2} className="evCol">
            <img alt="comp" className="evolve" src={this.props.compPic} />
          </Col>
          <Col md={6} className="namCol">
            <div className="name"> {this.props.name}</div>
          </Col>
          <Col md={3} className="school">
            {this.props.school}
          </Col>
          <Col md={1} className="elem">
            <img alt="type" className="type" src={this.props.type} />
          </Col>
        </Row>
        <Row>
          <Col md={1} />
          <Col md={10}>
            <img alt="person" className="bigPic" src={this.props.bigPic} />
          </Col>
          <Col md={1} />
        </Row>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Row className="banner">
              <div>
                Age: {this.props.age} Height: {this.props.height} Weight:
                {this.props.weight}
              </div>
            </Row>
          </Col>
          <Col md={2} />
        </Row>
        <Row className="strengths">
          <Col md={2} className="emblems">
            <Row className="emblems">
              <img
                alt="sEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
              <img
                alt="sEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
            </Row>
            <Row className="emblems">
              <img
                alt="sEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
            </Row>
          </Col>
          <Col md={8} className="strDesc">
            <span className="strTitle">Offense</span>{" "}
            <span className="strDesc">{this.props.strDesc}</span>
          </Col>
          <Col md={2} className="stat">
            {this.props.strNum}
          </Col>
        </Row>
        <hr className="btmHr" />
        <Row className="weakness">
          <Col md={2} className="emblems">
            <Row className="emblems">
              <img
                alt="wEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
              <img
                alt="wEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
            </Row>
            <Row className="emblems">
              <img
                alt="wEmblem"
                className="type"
                src="https://ih0.redbubble.net/image.402378129.5429/flat,550x550,075,f.jpg"
              />
            </Row>
          </Col>
          <Col md={8} className="wknDesc">
            <span className="wknTitle">Defense</span>{" "}
            <span className="wknDesc">{this.props.wknDesc}</span>
          </Col>
          <Col md={2} className="stat">
            {this.props.wknNum}
          </Col>
        </Row>
        <hr className="btmHr" />
        <Row>
          <Col md={3} className="stats">
            <Row className="stats"> Pos </Row>
            <Row className="stats"> {this.props.pos} </Row>
          </Col>
          <Col md={3} className="stats">
            <Row className="stats"> Pts </Row>
            <Row className="stats"> {this.props.pts} </Row>
          </Col>
          <Col md={3} className="stats">
            <Row className="stats"> Reb </Row>
            <Row className="stats"> {this.props.reb} </Row>
          </Col>
          <Col md={3} className="stats">
            <Row className="stats"> Ast </Row>
            <Row className="stats"> {this.props.ast} </Row>
          </Col>
        </Row>
        <Row>
          <Col md={1} />
          <Col md={10} className="summary">
            {this.props.summary}
          </Col>
          <Col md={1} />
        </Row>
      </Container>
    );
  }
}
