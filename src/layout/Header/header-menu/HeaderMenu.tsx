import styled from "styled-components"
import { thema } from "../../../styles/Thema"

export function HeaderMenu(){

    return(
        <MenuStyled>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Tech Stack</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </MenuStyled>
    )
}

const MenuStyled = styled.nav`

    ul{
        display: flex;
        gap: 50px;
        margin-right: 50px;
        
        @media ${thema.media.miniDesktop}{
            gap: 20px;
        }
    }
     
    a{
        color: ${thema.colors.font};
        font-family: "DM Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }

    @media ${thema.media.tablet}{
        display: none;
    }
`