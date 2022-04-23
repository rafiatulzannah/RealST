import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

import styled from "styled-components";
import  {Link } from "react-router-dom";

 const FooterContainer = styled.footer`
  background-color: #101522;
`

 const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

 const FooterLinksContainer= styled.div`
  display:flex;
  justify-content: center;

  @media screen and (max-width: 820px){
      padding-top: 32px;
  }
`

 const FooterLinksWrapper= styled.div`
  display: flex;

  @media screen and (max-width: 820px){
      flex-direction: column;
  }
`

 const FooterLinkItems=  styled.div`
  display:flex;
  flex-direction :column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color:#fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
 const FooterLinkTitle =styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

 const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
      color: #cd853f;
      transition: 0.3s ease-out;
  }
`
 const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

 const SocialWrap= styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width:  1100px;
 margin: 40px auto 0 auto;

 @media screen and (max-width: 820px){
     flex-direction: column;
 }
`

 const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  margin-bottom: 16px;
  font-weight: bold;
`

 const WebsiteRights = styled.small`
 color: #fff;
 margin-bottom: 16px;
`

 const SocialIcons= styled.div`
 display:flex;
 justify-content: space-between;
 align-items: cover;
 width: 240px;
`

 const SocialIconLink= styled.a`
 color: #fff;
 font-size: 24px;
`

const Footer = () => {

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialWrap>
                    <SocialLogo to="/">
                        RealST
                    </SocialLogo>
                    <WebsiteRights> RealST &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"  aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"  aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"  aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"  aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"  aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

 export default Footer