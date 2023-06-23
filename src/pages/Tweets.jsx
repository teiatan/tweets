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
import { setNewSession } from "service/sessions";

export const TweetsPage = () => {
    const [sessionId, setSessionId] = useState(() => JSON.parse(window.localStorage.getItem('sessionId')) ?? '');
    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState(() => JSON.parse(window.localStorage.getItem('followedUsers')) ?? []);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const usersPerpage = 6;

    useEffect(()=>{
        window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    }, [followedUsers]);

    useEffect(()=>{
        window.localStorage.setItem('sessionId', JSON.stringify(sessionId));
    }, [sessionId]);

    useEffect(()=>{
        setIsLoading(true);
        getUsers(1, usersPerpage).then(res => {
            setUsers(res);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(()=>{
        if(sessionId === ''){
            setNewSession().then(res => {
                setSessionId(res.id);
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
        };
    }, [sessionId]);

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

    const getFollowingUsers = async () => {
        
    };

    return(
        <PageContainer>

            <HandleBar>
               <Link to='/'><GoBackButton>
                    <TbArrowBack color='#EBD8FF'/>
                    Go back
                </GoBackButton></Link>
                <TweetsFilter getFollowingUsers={getFollowingUsers}/>
            </HandleBar>   

            <UsersList 
                users={users}
                setUsers={setUsers}
                followedUsers={followedUsers}
                setFollowedUsers={setFollowedUsers}
                sessionId={setSessionId}
            />

            {isLoading && <Loader />}

            {(page<(100/usersPerpage)) && !isLoading && 
                <LoadMoreButton onClick={handleLoadMore}>
                    Load more
                </LoadMoreButton>
            }

        </PageContainer>
    );
};

export default TweetsPage;