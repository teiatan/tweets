import { UserCard } from "components/UserCard/UserCard";
import { CardsContainer } from "./UsersList.styled";
import { getArrayAfterTogglingItem } from "utils/getArrayAfterTogglingItem";
import { updateSessionFollowers } from "service/sessions";

export const UsersList = ({users, setUsers, followedUsers, setFollowedUsers, sessionId}) => {

    const handleChangingFollowersArray = (id) => {
        const newFollowedUsersArray = getArrayAfterTogglingItem(followedUsers, id);
        setFollowedUsers(newFollowedUsersArray);
        updateSessionFollowers(sessionId, newFollowedUsersArray);
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