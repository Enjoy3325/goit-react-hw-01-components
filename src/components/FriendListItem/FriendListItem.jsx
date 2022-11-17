import PropTypes from 'prop-types';
import { Item } from '../FriendList/FriendList.styled';
import { Status } from './FriendListItem.styled';
export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status statusType={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="70" />
      <p className="name">{name}</p>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
