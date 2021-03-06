import React, { Component } from "react";
import RutgersLogo from "../../images/rutgerslogo.png";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";
import "./headerstyles.css";

export default class Header extends Component {
  render() {
    return (
        <HeaderContainer>
          <img src={RutgersLogo} alt="logo" className="Logo" />
          <OptionsContainer>
            <OptionLink to="/">Home</OptionLink>
            <OptionLink to="/register">Register</OptionLink>
            <OptionLink to="/login">Login</OptionLink>
          </OptionsContainer>
        </HeaderContainer>
    );
  }
}
