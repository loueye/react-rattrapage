import React from 'react';
import {Link} from 'react-router-dom';

export function Navbar() {
    return (
      <nav className="navbar-dark bg-primary navbar navbar-expand-lg">
          <div className="container">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/" className="nav-link text-dark">Home</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }