import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import "./card-style.css";

class Card extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} className="modal-container">
          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>One fine body...</Modal.Body>

              <Modal.Footer>
                <div>
                  Footer
            </div>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Card;