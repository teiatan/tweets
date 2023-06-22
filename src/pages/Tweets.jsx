import { PageContainer } from "components/PageContainer/PageContainer";
import { TweetsFilter } from "components/TweetsFilter/TweetsFilter";
import { UsersList } from "components/UsersList/UsersList";
import { TbArrowBack } from 'react-icons/tb';
import { GoBackButton, HandleBar } from "./Tweets.styled";

export const TweetsPage = () => {
    return(
        <PageContainer>
            <HandleBar>
                <GoBackButton>
                    <TbArrowBack color='#EBD8FF'/>
                    Go back
                </GoBackButton>
                <TweetsFilter />
            </HandleBar>   
            <UsersList />
        </PageContainer>
    );
};

export default TweetsPage;