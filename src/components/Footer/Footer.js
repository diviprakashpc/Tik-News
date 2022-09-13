import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Container maxWidth="lg">
    <div className="footer">
      <span className="name">
        Tik News made by -{" "}
        <a
          href="https://www.linkedin.com/in/divya-prakash-2000/"
          target="__blank"
        >Divya Prakash</a>
      </span>
      <hr style={{ width: "90%", backgroundColor:"white" }} />
      <div className="iconContainer">
        <a href="https://github.com/diviprakashpc" target="__blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/divya-prakash-2000/"
          target="__blank"
        >
          <i className="fab fa-linkedin  fa-2x"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1fTQdS2TGkOd8EAERlmAaZZKU66LWqU3p/view?usp=sharing"
          target="__blank"
        >
        <i className="fa-duotone fa-folder-open fa-2x"></i>
        </a>
      </div>
    </div>
    </Container>
  );
};

export default Footer;

