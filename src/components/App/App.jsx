import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendList } from '../FriendList/FriendList';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/Profile';
import transactions from '../../data/transactions.json';
import friends from '../../data/friends.json';
import data from '../../data/data.json';
import user from '../../data/user.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
