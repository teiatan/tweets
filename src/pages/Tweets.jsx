import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TbArrowBack } from 'react-icons/tb';
import { getSessionFollowers, setNewSession } from "service/sessions";
import { getAllUsers, getUsers } from "service/users";
import { PageContainer } from "components/PageContainer/PageContainer";
import { TweetsFilter } from "components/TweetsFilter/TweetsFilter";
import { UsersList } from "components/UsersList/UsersList";
import { Loader } from "components/Loader/Loader";
import { LoadMoreButton } from "components/UsersList/UsersList.styled";
import { GoBackButton, HandleBar } from "./Tweets.styled";
import { usersPerpage } from "utils/variables.js";


export const TweetsPage = () => {
    const [sessionId, setSessionId] = useState(() => JSON.parse(window.localStorage.getItem('sessionId')) ?? '');
    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    useEffect(()=>{
        window.localStorage.setItem('sessionId', JSON.stringify(sessionId));

        if(sessionId === '' || !sessionId){
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

    useEffect(()=>{
        if(sessionId === "") {
            return;
        };

        if(query === "" || query === "show all") {
            setIsLoading(true);
            getUsers(page, usersPerpage).then(res => {
                setUsers((prev) => ([...prev, ...res]));
                setIsLoading(false);
                setTotalPages(Math.ceil(100/usersPerpage));
            }).catch(error => {
                console.log(error);
            });
        };

        if(query === "followings") {
            getSessionFollowers(sessionId).then(res => {
                const arr = res.followedUsers.slice((page-1)*usersPerpage, (page-1)*usersPerpage+usersPerpage);
                setUsers((prev) => ([...prev, ...arr]));
                setIsLoading(false);
                setTotalPages(Math.ceil(res.followedUsers.length/usersPerpage));
            })
        };

        if(query === "follow") {
            getAllUsers().then(res => {
                const all = res.filter(user => !user.followersArray.includes(sessionId));
                const arr = all.slice((page-1)*usersPerpage, (page-1)*usersPerpage+usersPerpage);
                setUsers((prev) => ([...prev, ...arr]));
                setIsLoading(false);
                setTotalPages(Math.ceil(all.length/usersPerpage));
            })
        };
    }, [query, sessionId, page]);

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    const handleLoadMore = () => {
        setPage(page+1);
        setIsLoading(true);
    };

    const filterUsers = async (filter) => {
        setPage(1);
        setUsers([]);
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

            {(page<totalPages) && !isLoading && 
                <LoadMoreButton onClick={handleLoadMore}>
                    Load more
                </LoadMoreButton>
            }

        </PageContainer>
    );
};

export default TweetsPage;