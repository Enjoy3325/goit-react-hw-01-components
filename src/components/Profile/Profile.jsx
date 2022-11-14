// import PropTypes from 'prop-types';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Profile.PropTypes = {
//   username: PropTypes.string.isRequared,
//   tag: PropTypes.string.isRequared,
//   location: PropTypes.string.isRequared,
//   avatar: PropTypes.string.isRequared,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequared,
//     views: PropTypes.number.isRequared,
//     likes: PropTypes.number.isRequared,
//   }),
// };
