import styled from '@emotion/styled'

export const Button = styled.button`
        position:fixed;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        font-family. ${props => props.theme.fonts.heading};
        background-color: ${props => props.theme.colors.olive};
        color: ${props => props.theme.colors.white};
        border-radius:50px;
        text-align:center;
        box-shadow: 2px 2px 3px ${props => props.theme.colors.softBlack};

        &:active {
                transform: translateY(1px);
            }
`
