import styled from "styled-components";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { NavLinksSocial } from "../../../components/nav-link-social/NavLinksSocial";

export function Contacts() {

    return(
        <FlexWrapper justify="space-between">
            <Logo />
            <FlexWrapper>
                <PhoneLink href="tel:+79511057033">
                    +79511057033
                </PhoneLink>
                <MailLink href="mailto:1988anton62@gmail.com">
                    1988anton62@gmail.com
                </MailLink>
                <NavLinksSocial />
            </FlexWrapper>
        </FlexWrapper>
    )
}

const MailLink = styled.a`
    
`
const PhoneLink = styled.a`
    
`