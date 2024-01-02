import styled from "styled-components"

type GridWrapperPropsType = {
    columnsRepeat: string
    rowGap?: string
    columnGap?: string
    justifyContent?: string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: repeat(${props => props.columnsRepeat});
    justify-content: center;
    justify-items: center;
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
    justify-content: ${props => props.justifyContent};
`