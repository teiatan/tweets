import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Avatar, Info } from './UserCard.styled';

export const UserCard = ({tweets, followers, avatar, id, followedUsers, setFollowedUsers}) => {
  const [isFollowing, setIsFollowing] = useState(()=>followedUsers.includes(id));

  const handleFollowClick = () => {
    const isInArray = followedUsers.includes(id);
    if(!isInArray){
      setFollowedUsers([...followedUsers, id]);
      setIsFollowing(true);
    } else {
      const index = followedUsers.indexOf(id);
      followedUsers.splice(index, 1);
      setFollowedUsers(followedUsers);
      setIsFollowing(false);
    };
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
