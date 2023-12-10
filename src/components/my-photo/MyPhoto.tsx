import styled from "styled-components"
import myPhoto from "../../assets/img/my-photo.jpeg"

export function MyPhoto() {

    return(
        <PhotoStyled src={myPhoto} alt="photo" />
    )
}

const PhotoStyled = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    border: 9px solid rgba(231, 15, 170, 1);
`