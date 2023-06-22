import { UserCard } from "components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { getUsers } from "service/users";
import { CardsContainer, LoadMoreButton } from "./UsersList.styled";

export const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    const usersPerpage = 6;

    const handleLoadMore = () => {
        setPage(page+1);
        getUsers(page+1, usersPerpage).then(res => {
            setUsers([...users, ...res]);
            console.log('fetch load more');
        }).catch(error => {
        // handle error
        });
    };

    useEffect(()=>{
        console.log('effect');
        getUsers(1, usersPerpage).then(res => {
            setUsers(res);
        }).catch(error => {
        // handle error
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
            {(page<(100/usersPerpage)) && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </>

    )
};