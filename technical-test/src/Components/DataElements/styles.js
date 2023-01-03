import styled from '@emotion/styled'

export const Element = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding: ${props => props.theme.sizes.rem06};
    align-self: center;
`

export const Image = styled.img`
    grid-row: 1 / span 2;
`

export const Name = styled.p`
    align-self: center;
    text-align: center;
    font-weight: ${props => props.theme.fontWeight.bold}
`

export const Email = styled.p`
    align-self: center;
    text-align: center;
`
