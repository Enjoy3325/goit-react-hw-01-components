export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      {' '}
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
