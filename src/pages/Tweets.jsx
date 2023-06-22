import { PageContainer } from "components/PageContainer/PageContainer";
import { UsersList } from "components/UsersList/UsersList";

export const TweetsPage = () => {
    return(
        <PageContainer>
            <UsersList />
        </PageContainer>
    );
};

export default TweetsPage;