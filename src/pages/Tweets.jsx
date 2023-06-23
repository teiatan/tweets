import { PageContainer } from "components/PageContainer/PageContainer";
import { TweetsFilter } from "components/TweetsFilter/TweetsFilter";
import { UsersList } from "components/UsersList/UsersList";
import { TbArrowBack } from 'react-icons/tb';
import { GoBackButton, HandleBar } from "./Tweets.styled";
import { useEffect, useState } from "react";
import { getAllUsers, getUsers } from "service/users";
import { Loader } from "components/Loader/Loader";
import { LoadMoreButton } from "components/UsersList/UsersList.styled";
import { Link, useSearchParams } from "react-router-dom";
import { getSessionFollowers, setNewSession } from "service/sessions";

export const TweetsPage = () => {
    const [sessionId, setSessionId] = useState(() => JSON.parse(window.localStorage.getItem('sessionId')) ?? '');
    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    const usersPerpage = 3;

    useEffect(()=>{
        window.localStorage.setItem('sessionId', JSON.stringify(sessionId));
    }, [sessionId]);

    useEffect(()=>{
        if(query === "" || query === "show all") {
            setIsLoading(true);
            getUsers(1, usersPerpage).then(res => {
                setUsers(res);
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
            });
        };

        if(query === "followings") {
            setUsers(followedUsers);
            setIsLoading(false);
        };

        if(query === "follow") {
            getAllUsers().then(res => {
                const arr = res.filter(user => !user.followersArray.includes(sessionId));
                setUsers(arr);
                setIsLoading(false);
            })
        };
    }, [query, followedUsers, sessionId]);

    useEffect(()=>{
        if(sessionId === ''){
            setNewSession().then(res => {
                setSessionId(res.id);
            }).catch(error => {
                console.log(error);
            });
        } else {
            getSessionFollowers(sessionId).then(res => {
                setFollowedUsers(res.followedUsers);
            }).catch(error => {
                console.log(error);
                setSessionId('');
            });
        };
    }, [sessionId]);

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

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

    const filterUsers = async (filter) => {
        setPage(1);
        //setUsers([]);
        setIsLoading(true);
        updateQueryString(filter);
    };

    return(
        <PageContainer>

            <HandleBar>
               <Link to='/'><GoBackButton>
                    <TbArrowBack color='#EBD8FF'/>
                    Go back
                </GoBackButton></Link>
                <TweetsFilter filterUsers={filterUsers}/>
            </HandleBar>   

            <UsersList 
                users={users}
                setUsers={setUsers}
                followedUsers={followedUsers}
                setFollowedUsers={setFollowedUsers}
                sessionId={sessionId}
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