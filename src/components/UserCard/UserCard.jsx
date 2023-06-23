import PropTypes from 'prop-types';
import { Container, Button, Avatar, Info } from './UserCard.styled';
import { getUserById, updateUserFollowers } from 'service/users';
import { getStringsArrayAfterTogglingItem } from 'utils/getArrayAfterTogglingItem';

export const UserCard = ({tweets, followers, avatar, id, isFollowing, handleChangingFollowersArray, handleChangingUsersArray, sessionId}) => {

  const handleFollowClick = async () => {
    const userFromApi = await getUserById(id);
    // const followersFromApi = await getUserFollowers(id);
    const followersAmountFromApi = userFromApi.followers;
    const followersArrayFromApi = userFromApi.followersArray;
    const newFollowersAmount = isFollowing ? followersAmountFromApi-1 : followersAmountFromApi+1;
    const newFollowersArray = getStringsArrayAfterTogglingItem(followersArrayFromApi, sessionId);
    console.log(newFollowersArray);
    updateUserFollowers(id, newFollowersAmount);
    handleChangingFollowersArray(id, {...userFromApi, followers: newFollowersAmount, followersArray: newFollowersArray});
    handleChangingUsersArray(id, {followers: newFollowersAmount, followersArray: newFollowersArray});
    
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
