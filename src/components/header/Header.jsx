import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="h3 pt-3 mb-0 text-center text-secondary">
          <span className="font-weight-bold">D</span>aily 
          <span className="font-weight-bold"> C</span>ash 
          <span className="font-weight-bold"> A</span>ccounting
          </h1>
      </header>
    )
  }
}