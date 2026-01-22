import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// import { Container, Row, Col } from 'react-bootsrtap'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Row>
          <Col className="text-center p-2">
            <a
              href="https://github.com/rishavB7"
              target="_blank"
              className="p-4"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rishav-barman-b88b15203/"
              target="_blank"
              className="p-4"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>

            <a
              href="https://www.instagram.com/ig_saviter?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
              className="p-4"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </Col>
        </Row>
        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Help desk</a>
            </li>
          </ul>
        </div>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2023 GadgetGrove - All rights reserved
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
