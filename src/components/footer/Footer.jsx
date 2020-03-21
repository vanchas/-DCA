import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-dark text-center pt-1 pb-3">
          © 2020 Copyright:
          <a className="text-secondary" href="https://github.com/vanchas"> &nbsp;
          github.com/vanchas
          </a>
        </div>
      </footer>
    )
  }
}
