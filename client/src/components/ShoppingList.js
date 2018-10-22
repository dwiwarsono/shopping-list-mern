import React, { Component } from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: uuid(), name: 'Telur' },
        { id: uuid(), name: 'Telur' },
        { id: uuid(), name: 'Telur' }
      ],
      modal: false
    };
    this._addItem = this._addItem.bind(this);
  }

  _addItem() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2em' }}
          onClick={this._addItem}>
          Add Item
        </Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Add Item</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-4">
                  <label>Name:</label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this._addItem}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </Container>
    )
  }

}

export default ShoppingList;