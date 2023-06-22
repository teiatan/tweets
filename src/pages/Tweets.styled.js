import styled from "@emotion/styled";

export const HandleBar = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const GoBackButton = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #EBD8FF;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    background: linear-gradient(
                114.99deg,
                #471ca9 -0.99%,
                #5736a3 54.28%,
                #4b2a99 78.99%);;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    :hover {
        background: #281F76;
    }

`;