import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SkillPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
}

export function Skill(props: SkillPropsType) {
     
    return(
        <SkillStyled>
            <Icon iconId={props.iconId} 
                  viewBox={props.viewBox} 
                  width={props.width}
                  height={props.height} />
        </SkillStyled>
    )
}

const SkillStyled = styled.div`
    
`