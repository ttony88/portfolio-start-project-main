import styled from "styled-components"

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
        gap: 60px
    }
`