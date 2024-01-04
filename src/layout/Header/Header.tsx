import styled from "styled-components"
import { NavLinksSocial } from "../../components/nav-link-social/NavLinksSocial"
import { FlexWrapper } from "../../components/flex-wrapper/FlexWrapper"
import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/container/Container"
import { HeaderMenu } from "./header-menu/HeaderMenu"
import { MobileMenu } from "./mobile-menu/MobileMenu"

export function Header(){

    return (
      <HeaderStyled>
        <Container>
          <FlexWrapper justify="space-between">
            <Logo />
            <FlexWrapper align="center">
              <HeaderMenu />
              <NavLinksSocial />
              <MobileMenu/>
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    padding: 40px 0 40px;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #ffffff;

`