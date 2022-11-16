import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  NameUser,
  TextDescription,
  Stats,
  ItemStats,
  SpanLabel,
  QuantitySpan,
  PhotoAvatar,
} from './Profile.styled';
export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileDiv>
      <Description>
        <PhotoAvatar src={avatar} alt={username} />
        <NameUser>{username}</NameUser>
        <TextDescription>@{tag}</TextDescription>
        <TextDescription>{location}</TextDescription>

        <Stats>
          <ItemStats>
            <SpanLabel>Followers</SpanLabel>
            <QuantitySpan>{followers}</QuantitySpan>
          </ItemStats>
          <ItemStats>
            <SpanLabel>Views</SpanLabel>
            <QuantitySpan>{views}</QuantitySpan>
          </ItemStats>
          <ItemStats>
            <SpanLabel>Likes</SpanLabel>
            <QuantitySpan>{likes}</QuantitySpan>
          </ItemStats>
        </Stats>
      </Description>
    </ProfileDiv>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
