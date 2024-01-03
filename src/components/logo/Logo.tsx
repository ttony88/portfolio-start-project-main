import styled from "styled-components";
import { Icon } from "../icon/Icon";
import imgLogoGradient from "../../assets/img/logo-gradient.svg"

type LogoPropsType = {
    colorLogo?: string
}

export function Logo(props: LogoPropsType) {

    return(
        <a href="#">
            <img src={imgLogoGradient} alt="logo"/>
        </a>
    )
}

const LogoStyled = styled.svg`
    
`