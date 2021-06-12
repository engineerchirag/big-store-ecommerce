
import Styled from 'styled-components';


export const AdminHeader = Styled.h1`
    width: 100%;
    height: 100px;
    background-color: blueviolet;
    text-align: left;
    color: ${props => props.color};
    .detail:hover {
        color: green;
    }
`;

export  const AdminSidebar = Styled.h2`
    height: 50vh;
    width: 200px;
    background-color: blue;
`;