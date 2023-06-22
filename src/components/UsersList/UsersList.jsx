import { UserCard } from "components/UserCard/UserCard";
import { CardsContainer } from "./UsersList.styled";

export const UsersList = ({users, setUsers, followedUsers, setFollowedUsers}) => {

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
    )
};