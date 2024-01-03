import styled from "styled-components";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { NavBar } from "../../../components/nav-bar/NavBar";

export function FooterNav() {

    return(
        <FooterNavStyled>
            <FlexWrapper justify="space-between" align="center">
            <NavBar />
            <Development>
                Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span>
            </Development>
        </FlexWrapper>
        </FooterNavStyled>
        
    )
}

const Development = styled.small`
    font-size: 18px;
    font-weight: 400;
    span{
        background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const FooterNavStyled = styled.div`
    padding-top: 45px;
`