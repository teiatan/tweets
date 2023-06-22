import { CirclesContainer, FirstCircle, LoaderContainer, SecondCircle, ThirdCircle } from "./Loader.styled";

export const Loader = () => {
    return(
        <LoaderContainer>
            <CirclesContainer>
                <FirstCircle />
                <SecondCircle />
                <ThirdCircle />
            </CirclesContainer>
        </LoaderContainer>
    )
};