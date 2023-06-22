import { UserCard } from "components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { getUsers } from "service/users";
import { CardsContainer, LoadMoreButton } from "./UsersList.styled";
import { Loader } from "components/Loader/Loader";

export const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const usersPerpage = 6;

    const handleLoadMore = () => {
        setPage(page+1);
        setIsLoading(true);
        getUsers(page+1, usersPerpage).then(res => {
            setUsers([...users, ...res]);
            console.log('fetch load more');
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
                            tweets={user.tweets}
                            followers={user.followers}
                            avatar={user.avatar}
                        />
                    )
                })}

            </CardsContainer>
            {isLoading && <Loader />}
            {(page<(100/usersPerpage)) && !isLoading && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </>

    )
};