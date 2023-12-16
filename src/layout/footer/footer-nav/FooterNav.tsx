import styled from "styled-components";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { NavBar } from "../../../components/nav-bar/NavBar";

export function FooterNav() {

    return(
        <FlexWrapper justify="space-between">
            <NavBar />
            <Development>
                Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span>
            </Development>
        </FlexWrapper>
    )
}

const Development = styled.small`
    
`