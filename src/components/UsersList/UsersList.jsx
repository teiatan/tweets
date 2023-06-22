import { UserCard } from "components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { getUsers } from "service/users";
import { Container } from "./UsersList.styled";

export const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers(1, 10).then(res => {
            setUsers(res);
        }).catch(error => {
        // handle error
        });
    }, [])
    return (
        <Container>
    
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
        </Container>
    )
};