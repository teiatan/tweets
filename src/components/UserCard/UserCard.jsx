import PropTypes from 'prop-types';
import { Container, Button, Avatar, Info } from './UserCard.styled';
import { getUserFollowers, updateUserFollowers } from 'service/users';

export const UserCard = ({tweets, followers, avatar, id, isFollowing, handleChangingFollowersArray, handleChangingUsersArray}) => {

  const handleFollowClick = async () => {
    handleChangingFollowersArray(id);
    const followersFromApi = await getUserFollowers(id);
    if(isFollowing) {
      updateUserFollowers(id, followersFromApi-1)
      handleChangingUsersArray(id, followersFromApi-1)
    } else {
      updateUserFollowers(id, followersFromApi+1)
      handleChangingUsersArray(id, followersFromApi+1)
    }
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
