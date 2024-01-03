import styled from "styled-components";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { NavLinksSocial } from "../../../components/nav-link-social/NavLinksSocial";

export function Contacts() {

    return (
      <ContactsStyled>
        <FlexWrapper justify="space-between">
          <Logo colorLogo="#666666" />
          <FlexWrapper gap="60px" align="center">
            <PhoneLink href="tel:+79511057033">+79511057033</PhoneLink>
            <MailLink href="mailto:1988anton62@gmail.com">
              1988anton62@gmail.com
            </MailLink>
            <NavLinksSocial />
          </FlexWrapper>
        </FlexWrapper>
      </ContactsStyled>
    );
}

const MailLink = styled.a`
    font-family: DM Sans;
    font-size: 18px;
    font-weight: 400;
    color: #42446E;
`
const PhoneLink = styled.a`
    font-family: DM Sans;
    font-size: 18px;
    font-weight: 400;
    color: #42446E;
`
const ContactsStyled = styled.div`
    border-bottom: 2px solid rgba(102, 102, 102, 0.3);
    padding-bottom: 40px;
`