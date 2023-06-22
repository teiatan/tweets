import styled from '@emotion/styled';
import Circle from 'images/CIrcle.png';
import Logo from 'images/Logo.png';
import CardTopBackground from 'images/CardTopBackground.png';
import Line from 'images/Line.png';

export const Container = styled.li`
    width: 380px;
    min-height: 460px;
    box-sizing: border-box;
    padding-bottom: 36px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background: 
        url(${Logo}) 20px 20px,
        url(${CardTopBackground}) center 28px,
        url(${Circle}) 50% 50%, 
        url(${Line}) center,
        linear-gradient(
            114.99deg,
            #471ca9 -0.99%,
            #5736a3 54.28%,
            #4b2a99 78.99%);
    background-repeat: no-repeat;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`;

export const Avatar = styled.img`
    width: 64px;
    height: 64px;
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
`;

export const Info = styled.p`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ebd8ff;
`;
export const Button = styled.button`
    width: 196px;
    height: 50px;
    margin-top: 10px;
    padding: 14px 28px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
    border: none;
    border-radius: 10px;
    background-color: ${({isFollowing}) => isFollowing?'#5CD3A8' : '#EBD8FF'};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    :hover {
        background: #E2B73B;
    }
`;