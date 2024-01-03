import styled from "styled-components"
import myPhoto from "../../../../assets/img/my-photo.webp"

export function MyPhoto() {

    return(
        <WrapperPhoto>
            <PhotoStyled src={myPhoto} alt="photo" />
        </WrapperPhoto>
    )
}

const PhotoStyled = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    padding: 9px;
    border-radius: 50%;
    
`
const WrapperPhoto = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-image: linear-gradient(rgba(231, 15, 170, 1), rgba(0, 192, 253, 1));
    overflow: hidden;
`