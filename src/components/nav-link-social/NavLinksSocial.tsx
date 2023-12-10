import styled from "styled-components"
import { Icon } from "../icon/Icon"

export function NavLinksSocial() {

    return(
        <NavLinksSocialStyled>
            <ul>
                <li>
                    <a href="#">
                        <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon iconId="twitter" width="33" height="33" viewBox="0 0 33 33" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30" />
                    </a>
                </li>
            </ul>
        </NavLinksSocialStyled>
    )
}

const NavLinksSocialStyled = styled.nav`
    ul{
        display: flex;
        gap: 20px
    }
`