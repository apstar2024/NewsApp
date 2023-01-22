 import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Surya
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled">Disabled</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/Entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/general">General</Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/Health">Health</Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/Science">Science</Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link active mx-2" aria-current="page" to="/Technology">Technology</Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
