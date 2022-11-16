// import PropTypes from 'prop-types';
import { TransactionHistoryTable, Thead } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

// TransactionHistory.prototype = {
//   type: PropTypes.string,
//   amount: PropTypes.number,
//   currency: PropTypes.string,
// };
