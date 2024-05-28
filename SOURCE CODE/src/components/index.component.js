import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TodosList extends Component {
  render() {
    return (
      <div id="index">
        <div className="row header">
          <div className="header-img">
            <div className="row nav">
              <div className="nav2-logo">
                <Link to="/" className="navbar-brand header-logo"></Link>
                
              </div>
              <div className="nav2-links2">
              <a href="#about__us">About Us</a>
                <a href="/users">Farmers</a>
                <a href="#blog">Blog</a>
                <a href="/contact">Contact</a>
                <Link to="/users" className="nav-link">
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer pb-5 justify-content-around pt-5">
          <div className="col-md-2 d-flex flex-column">
            <a href="#about__us">About Us</a>
            <a href="#farmers">Farmers</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="col-md-3">
            <div className="footer-img"></div>
          </div>
          <div className="col-md-3">
            <div className="row mb-3">
              <h4>Subscribe for Updates</h4>
            </div>
            <div className="row justify-content-between">
              <input
                type="text"
                placeholder="Description"
                className="contact-input-3"
              ></input>
              <div className="footer-button">Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
