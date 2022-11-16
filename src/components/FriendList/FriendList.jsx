// import PropTypes from 'prop-types';
import { FriendListUl } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListUl>
  );
}

// FriendList.prototype = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
