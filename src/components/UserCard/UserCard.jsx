import PropTypes from 'prop-types';
import { getUserById } from 'service/users';
import { getStringsArrayAfterTogglingItem } from 'utils/getArrayAfterTogglingItem';
import { Container, Button, Avatar, Info } from './UserCard.styled';

export const UserCard = ({tweets, followers, avatar, id, isFollowing, handleChangingSessionDB, handleChangingUsersDB, sessionId}) => {

  const handleFollowClick = async () => {
    const userFromApi = await getUserById(id);
    const followersAmountFromApi = userFromApi.followers;
    const followersArrayFromApi = userFromApi.followersArray;
    const newFollowersAmount = isFollowing ? followersAmountFromApi-1 : followersAmountFromApi+1;
    const newFollowersArray = getStringsArrayAfterTogglingItem(followersArrayFromApi, sessionId);
    handleChangingSessionDB(id, {...userFromApi, followers: newFollowersAmount, followersArray: newFollowersArray});
    handleChangingUsersDB(id, {followers: newFollowersAmount, followersArray: newFollowersArray});
    
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
  avatar: PropTypes.string,
  id: PropTypes.string,
  isFollowing: PropTypes.bool, 
  handleChangingSessionDB: PropTypes.func,
  handleChangingUsersDB: PropTypes.func,
  sessionId: PropTypes.string
};
