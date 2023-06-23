import { PageContainer } from "components/PageContainer/PageContainer";
import { TweetsFilter } from "components/TweetsFilter/TweetsFilter";
import { UsersList } from "components/UsersList/UsersList";
import { TbArrowBack } from 'react-icons/tb';
import { GoBackButton, HandleBar } from "./Tweets.styled";
import { useEffect, useState } from "react";
import { getUsers } from "service/users";
import { Loader } from "components/Loader/Loader";
import { LoadMoreButton } from "components/UsersList/UsersList.styled";
import { Link } from "react-router-dom";

export const TweetsPage = () => {
    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState(() => JSON.parse(window.localStorage.getItem('followedUsers')) ?? []);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const usersPerpage = 6;

    useEffect(()=>{
        window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    }, [followedUsers]);

    useEffect(()=>{
        setIsLoading(true);
        getUsers(1, usersPerpage).then(res => {
            setUsers(res);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleLoadMore = () => {
        setPage(page+1);
        setIsLoading(true);
        getUsers(page+1, usersPerpage).then(res => {
            setUsers([...users, ...res]);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <PageContainer>
            <HandleBar>
               <Link to='/'><GoBackButton>
                    <TbArrowBack color='#EBD8FF'/>
                    Go back
                </GoBackButton></Link>
                <TweetsFilter />
            </HandleBar>   
            <UsersList 
                users={users}
                setUsers={setUsers}
                followedUsers={followedUsers}
                setFollowedUsers={setFollowedUsers}
            />
            {isLoading && <Loader />}
            {(page<(100/usersPerpage)) && !isLoading && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </PageContainer>
    );
};

export default TweetsPage;