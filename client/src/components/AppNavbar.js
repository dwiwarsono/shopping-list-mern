import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this._handleToggle} />
            <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Codepen</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Dribble</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }

}

export default AppNavbar;