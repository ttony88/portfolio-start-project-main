import styled from "styled-components"

export function Greeting() {
    return(
        <GreetingStyled>
            <h2>
                Hi 👋,<br/>
                My name is<br/> 
                <Name>Anton Turkin</Name>,<br />
                I am a
            </h2>
            <h1>frontend developer</h1>
        </GreetingStyled>
    )
} 

const GreetingStyled = styled.div`
    h1, h2{
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 70px; 
        letter-spacing: -1px;
    }
    
`
const Name = styled.span`
    background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`