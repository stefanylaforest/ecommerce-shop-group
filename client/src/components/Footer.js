import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./GlobalStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Account</FooterLinkTitle>
              <FooterLink to="/">Profile</FooterLink>
              <FooterLink to="/">Purchases</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Media>
          <MediaWrap>
            <Logo to="/">Logo</Logo>
            <CopyRight>
              Copyright © {new Date().getFullYear()} Logo. All Rights Reserved{" "}
            </CopyRight>
            <Icons>
              <IconLink href="/" target="_blank">
                <FaFacebook />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaInstagram />
              </IconLink>
            </Icons>
          </MediaWrap>
        </Media>
      </FooterWrap>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #ced0d0;
  color: #323232;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  font-family: ${theme.headingFont};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #323232;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
  }
`;

const Media = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const MediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  color: #323232;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: ${theme.headingFont};
`;

const CopyRight = styled.small`
  color: #323232;
  margin-bottom: 16px;
  font-family: ${theme.contentFont};
    line-height: 2;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;

const IconLink = styled.a`
  color: #323232;
  font-size: 24px;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
  }
`;

export default Footer;
