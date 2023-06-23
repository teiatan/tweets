import PropTypes from 'prop-types';
import { Container, Button, Avatar, Info } from './UserCard.styled';
import { getUserById, updateUserFollowers } from 'service/users';

export const UserCard = ({tweets, followers, avatar, id, isFollowing, handleChangingFollowersArray, handleChangingUsersArray, setSessionId}) => {

  const handleFollowClick = async () => {
    const userFromApi = await getUserById(id);
    // const followersFromApi = await getUserFollowers(id);
    const followersFromApi = userFromApi.followers;
    const newFollowersAmount = isFollowing ? followersFromApi-1 : followersFromApi+1;
    updateUserFollowers(id, newFollowersAmount);
    handleChangingFollowersArray(id, {...userFromApi, followers: newFollowersAmount});
    handleChangingUsersArray(id, newFollowersAmount);
    
  };
  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Info>{tweets} TWEETS</Info>
      <Info>{(followers).toLocaleString('en-US')} FOLLOWERS</Info>
      <Button 
        isFollowing={isFollowing}
        type="button"
        onClick={handleFollowClick}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Container>
  );
};

UserCard.propTypes = {
  tweets: PropTypes.number, 
  followers: PropTypes.number, 
  avatar: PropTypes.string
};
