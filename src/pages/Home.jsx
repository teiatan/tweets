import { Link } from "react-router-dom";
import { PageContainer } from "components/PageContainer/PageContainer";
import { Home, StyledButton } from "./Home.styled";

const HomePage = () => {


    return(
        <PageContainer>
            <Home>
                <Link to="/tweets"><StyledButton>
                    let's tweet
                </StyledButton></Link>
            </Home>
        </PageContainer>
    );
};

export default HomePage;