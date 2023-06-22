import PropTypes from 'prop-types';
import { Container, Button, Avatar, Info } from './UserCard.styled';

export const UserCard = ({tweets, followers, avatar, id, isFollowing, handleChangingFollowersArray}) => {

  const handleFollowClick = () => {
    handleChangingFollowersArray(id);
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
