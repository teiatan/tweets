import styled from "@emotion/styled";

export const Home = styled.div`
    height: calc(100vh - 60px);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgba(82,49,159,1) 0%, rgba(129,101,193,1) 34%, rgba(235,216,255,1) 69%, rgba(226,224,248,1) 100%);
`;

export const StyledButton = styled.button`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #EBD8FF;
    border: none;
    border-radius: 50%;
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