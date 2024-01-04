import styled from "styled-components"
import { thema } from "../../../styles/Thema"

export function MobileMenu(){

    return(
        <MobileMenuStyled>
            <ButtonMenu>
                <span></span>
            </ButtonMenu>
            <MobileMenuPopap>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Tech Stack</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </MobileMenuPopap>
        </MobileMenuStyled>
        
    )
}

const MobileMenuStyled = styled.div`
    display: none;
    margin-left: 50px;

    @media ${thema.media.tablet}{
        display: block;
    }
`
const ButtonMenu = styled.button`
    width: 40px;
    height: 46px;

    span{
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${thema.colors.font};
        

        &::before{
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${thema.colors.font};
            transform: translateY(-15px);
        }

        &::after{
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${thema.colors.font};
            transform: translateY(13px);
        }
    }
`

const MobileMenuPopap = styled.nav`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    background-color: #000000;
    opacity: 0.9;

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
`