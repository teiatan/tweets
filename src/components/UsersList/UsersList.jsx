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

    const handleChangingFollowersArray = (id) => {
        if(!followedUsers.includes(id)){
            setFollowedUsers([...followedUsers, id]);
            return;
        };
        const followerIndex = followedUsers.indexOf(id);
        const newFollowedUsersArray = [...followedUsers];
        newFollowedUsersArray.splice(followerIndex, 1);
        setFollowedUsers(newFollowedUsersArray);
    };

    const handleChangingUsersArray = (id, newAmountOfFollowers) => {
        const userIndex = users.findIndex(user => user.id === id);
        const updatedUser = {...users[userIndex], followers: newAmountOfFollowers};
        const newUsersArray = [...users];
        newUsersArray.splice(userIndex, 1, updatedUser);
        setUsers(newUsersArray);
    };

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
                            isFollowing={followedUsers.includes(user.id)}
                            handleChangingFollowersArray={handleChangingFollowersArray}
                            handleChangingUsersArray={handleChangingUsersArray}
                        />
                    )
                })}
            </CardsContainer>
            {isLoading && <Loader />}
            {(page<(100/usersPerpage)) && !isLoading && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </>
    )
};