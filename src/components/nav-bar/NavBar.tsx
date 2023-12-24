import styled from "styled-components"
import { thema } from "../../styles/Thema"

export function NavBar(){

    return(
        <NavStyled>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    ul{
        display: flex;
        gap: 50px;
        margin-right: 50px;
        
    }
     
    a{
        color: ${thema.colors.font};
        font-family: "DM Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;