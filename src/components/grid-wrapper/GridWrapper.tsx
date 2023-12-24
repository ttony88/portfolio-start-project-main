import styled from "styled-components"

type GridWrapperPropsType = {
    columnsRepeat: string
    rowsRepeat: string
    rowGap?: string
    columnGap?: string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: repeat(${props => props.columnsRepeat});
    grid-template-rows: repeat(${props => props.rowsRepeat});
    justify-content: center;
    justify-items: center;
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
`