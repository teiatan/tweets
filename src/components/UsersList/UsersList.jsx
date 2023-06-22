import { UserCard } from "components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { getUsers } from "service/users";
import { CardsContainer, LoadMoreButton } from "./UsersList.styled";
import { Loader } from "components/Loader/Loader";

export const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState(() => JSON.parse(window.localStorage.getItem('followedUsers')) ?? []);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        console.log('set storae');
        window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    }, [followedUsers]);

    const usersPerpage = 6;

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

    useEffect(()=>{
        setIsLoading(true);
        getUsers(1, usersPerpage).then(res => {
            setUsers(res);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <CardsContainer>
                {users.map(user => {
                    return(
                        <UserCard 
                            key={user.id}
                            id={user.id}
                            tweets={user.tweets}
                            followers={user.followers}
                            avatar={user.avatar}
                            followedUsers={followedUsers}
                            setFollowedUsers={setFollowedUsers}
                        />
                    )
                })}

            </CardsContainer>
            {isLoading && <Loader />}
            {(page<(100/usersPerpage)) && !isLoading && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </>

    )
};