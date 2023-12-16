import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { MyMail } from "../../../components/my-mail/MyMail";
import { MyPhone } from "../../../components/my-phone/MyPhone";
import { NavLinksSocial } from "../../../components/nav-link-social/NavLinksSocial";
import { Mail } from "../../sections/mail/Mail";

export function Contacts() {

    return(
        <FlexWrapper justify="space-between">
            <Logo />
            <FlexWrapper>
                <MyPhone href="tel:+79511057033">
                    +79511057033
                </MyPhone>
                <MyMail href="mailto:1988anton62@gmail.com">
                    1988anton62@gmail.com
                </MyMail>
                <NavLinksSocial />
            </FlexWrapper>
        </FlexWrapper>
    )
}