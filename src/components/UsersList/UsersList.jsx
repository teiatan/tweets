import { updateSessionFollowers } from "service/sessions";
import { updateUser } from "service/users";
import { getObjectsArrayAfterTogglingItem } from "utils/getArrayAfterTogglingItem";
import { UserCard } from "components/UserCard/UserCard";
import { CardsContainer } from "./UsersList.styled";

export const UsersList = ({users, setUsers, followedUsers, setFollowedUsers, sessionId}) => {

    const handleChangingSessionDB = async(id, user) => {
        const newFollowedUsersArray = getObjectsArrayAfterTogglingItem(followedUsers, id, user);
        setFollowedUsers(newFollowedUsersArray);
        updateSessionFollowers(sessionId, newFollowedUsersArray);
    };

    const handleChangingUsersDB = (id, newUserData) => {
        const userIndex = users.findIndex(user => user.id === id);
        const updatedUser = {...users[userIndex], ...newUserData};
        const newUsersArray = [...users];
        newUsersArray.splice(userIndex, 1, updatedUser);
        setUsers(newUsersArray);
        updateUser(id, newUserData);
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
                        isFollowing={followedUsers.flatMap(user => user.id).includes(user.id)}
                        handleChangingSessionDB={handleChangingSessionDB}
                        handleChangingUsersDB={handleChangingUsersDB}
                        sessionId={sessionId}
                    />
                )
            })}
        </CardsContainer>
    )
};