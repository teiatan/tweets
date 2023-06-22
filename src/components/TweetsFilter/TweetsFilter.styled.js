import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
`;

export const StyledButton = styled.button`
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

export const StyledList = styled.ul`
    width: 200px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #EBD8FF;
    border: none;
    border-radius: 10px;
    background: linear-gradient(
                114.99deg,
                #471ca9 -0.99%,
                #5736a3 54.28%,
                #4b2a99 78.99%);;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: absolute;
    z-index: 10;
`;

export const StyledItem = styled.li`
    padding: 5px 0 5px 33px;
    :hover {
        background-color: #EBD8FF;
        color: #471ca9;
        border-radius: 10px;

    }

`;