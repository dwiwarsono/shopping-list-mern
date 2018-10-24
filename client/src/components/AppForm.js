import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { tambahItem } from '../actions/itemAction';
import uuid from 'uuid';

class AppForm extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      name: '',
    }
    this._addItem = this._addItem.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
  }


  _handleChangeName = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });

  }

  _addItem() {
    this.setState({
      modal: !this.state.modal
    });
  }

  _handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    // Tambah Item dari tambahItem di action
    this.props.tambahItem(newItem);

    // Close modal
    this._addItem();
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2em' }}
          onClick={this._addItem}>
          Add Item
        </Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this._handleSubmit}>
            <ModalHeader>Add Item List</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Name:</label>
                  <input 
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Tambah item"
                    onChange={this._handleChangeName} 
                    className="form-control" />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this._addItem}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { tambahItem })(AppForm);