import { PageContainer } from "components/PageContainer/PageContainer"
import { StyledHeader, StyledNavLink, StyledNavList } from "./Header.styled"

export const Header = () => {
    return(
        <StyledHeader>
            <PageContainer>
                <StyledNavList>
                    <li><StyledNavLink to="/">Home</StyledNavLink></li>
                    <li><StyledNavLink to="/tweets">Tweets</StyledNavLink></li>
                </StyledNavList>
            </PageContainer>
        </StyledHeader>
    )
}