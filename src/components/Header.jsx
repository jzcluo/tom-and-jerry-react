import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom and Jerry</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
