import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CirclesContainer = styled.div`
    position: relative;
    transform: translate(-100px,0);
    padding: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

const move1 = keyframes`
    from {
        left: calc(20px * 2 + 10px * 2);
    }
    to {
        left: calc(240px - 20px);
    }
`;

const move2 = keyframes`
    from {
        left: calc(20px + 10px);
    }
    to {
        left: calc(240px - 20px * 2 - 10px);
    }
`;

const move3 = keyframes`
    from {
        left: 0px;
    }
    to {
        left: calc(240px - 20px * 3 - 10px * 2);
    }
`;

export const FirstCircle = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(235,216,255,1) 2%, rgba(82,49,159,1) 48%, rgba(129,101,193,1) 96%);
    left: calc(20px * 2 + 10px * 2);
    animation: 1.5s ease-in-out 0s infinite alternate ${move1};
`;

export const SecondCircle = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(235,216,255,1) 2%, rgba(82,49,159,1) 48%, rgba(129,101,193,1) 96%);
    left: calc(20px + 10px);
    animation: 1.5s ease-in-out 0.05s infinite alternate ${move2};
`;

export const ThirdCircle = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(235,216,255,1) 2%, rgba(82,49,159,1) 48%, rgba(129,101,193,1) 96%);
    left: 0px;
    animation: 1.5s ease-in-out calc(0.05s * 2) infinite alternate ${move3};
`;

