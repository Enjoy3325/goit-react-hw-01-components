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

Profile.PropTypes = {
  username: PropTypes.string.isRequared,
  tag: PropTypes.string.isRequared,
  location: PropTypes.string.isRequared,
  avatar: PropTypes.string.isRequared,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequared,
    views: PropTypes.number.isRequared,
    likes: PropTypes.number.isRequared,
  }),
};
