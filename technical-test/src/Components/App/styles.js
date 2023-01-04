import styled from '@emotion/styled'



export const Flexbox = styled.div`
    display: block;

    @media (min-width: 420px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-flow: space-around;
    }
`
